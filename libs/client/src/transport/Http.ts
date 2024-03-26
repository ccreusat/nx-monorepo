import axios, {
  AxiosError,
  AxiosInstance,
  // AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { ERROR_CODE } from '../globals';
import { IHttp, IHttpParams, IHttpResponse } from './interfaces';
import { ConfigurationFrameworkFactory } from '../configure/interfaces';

const loadedScripts: { [url: string]: boolean } = {};

export class Http implements IHttp {
  // Axios automatically manages the XSRF-TOKEN cookie and the X-XSRF-TOKEN HTTP header.
  private axios: AxiosInstance;

  private _latestResponse: any;

  constructor(params?: any) {
    this.axios = axios.create(params);
  }

  setCdn(cdnUrl: string): void {
    if (
      cdnUrl &&
      XMLHttpRequest &&
      !(XMLHttpRequest.prototype as any)['cdnUrl']
    ) {
      (XMLHttpRequest.prototype as any)['cdnUrl'] = cdnUrl;
      (XMLHttpRequest.prototype as any).baseOpen =
        XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function () {
        const url = arguments[1] as string;
        //PUBLIC infra
        if (url.startsWith('/infra/public')) {
          arguments[1] = cdnUrl + url;
        }
        //PUBLIC files (/.*/public)
        const match = /^\/([^\/]*)\/public/.test(url);
        if (match) {
          arguments[1] = cdnUrl + url;
        }
        //ASSETS files
        if (url.startsWith('/assets')) {
          arguments[1] = cdnUrl + url;
        }
        //SKIP PUBLIC CONF
        if (url == '/conf/public') {
          arguments[1] = url;
        }
        //SKIP HTTP
        if (url.startsWith('http')) {
          arguments[1] = url;
        }
        return (this as any).baseOpen.apply(this, arguments);
      };
    }
  }

  // private toAxiosConfig(params?: IHttpParams): AxiosRequestConfig {
  private toAxiosConfig(params?: IHttpParams): any {
    if (!params) {
      return this.axios.defaults;
    } else {
      const p = Object.assign({}, this.axios.defaults);

      if (params.headers) {
        if (p.headers)
          p.headers = Object.assign({}, this.axios.defaults.headers);
        Object.assign(p.headers, params.headers);
      }

      if (params.responseType) {
        p.responseType = params.responseType;
      }

      if (params.queryParams) {
        // Axios will serialize parameters, see https://github.com/axios/axios#request-config
        p.params = Object.assign({}, params.queryParams);
      }

      /* TODO : manage params.requestName through an events[]. See infra-front http.ts */

      return p;
    }
  }

  private toCdnUrl(url: string) {
    const CDN_DOMAIN: string | undefined =
      ConfigurationFrameworkFactory.instance().Platform.cdnDomain;
    // If CDN domain is defined, and requested url is not /public/conf (SKIP PUBLIC CONF)
    if (CDN_DOMAIN?.length > 0 && url !== '/conf/public') {
      const originalURL = '' + url;
      //PUBLIC infra or ASSETS files
      if (
        originalURL.startsWith('/infra/public') ||
        originalURL.startsWith('/assets')
      ) {
        url = CDN_DOMAIN + originalURL;
      } else {
        //PUBLIC files (/.*/public)
        const match = /^\/([^\/]*)\/public/.test(originalURL);
        if (match) {
          url = CDN_DOMAIN + originalURL;
        }
      }
    }
    return url;
  }

  private mapAxiosError<R>(error: AxiosError<R>, params?: IHttpParams): R {
    // AxiosError.response and our HttpResponse share the same properties.
    // So we can use it directly, saving CPU and memory.
    // Otherwise, we would map the axios response to our own model.
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      this._latestResponse = error.response;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      this._latestResponse = {
        status: 408,
        statusText: ERROR_CODE.TIME_OUT,
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      this._latestResponse = {
        status: 500,
        statusText: ERROR_CODE.UNKNOWN,
      };
    }

    /* TODO : manage params.requestName through an events[]. See infra-front http.ts */

    // Notify error unless disabled.
    if (!params || params.disableNotifications === false) {
      // FIXME This really should be an rxjs Subject
      // notify.onEvent( EVENT_NAME.HTTP_ERROR ).next( new HttpErrorNotice(''+this._latestResponse.status, this._latestResponse.statusText) );
    }

    return this._latestResponse;
  }

  private mapAxiosResponse<R>(
    response: AxiosResponse<R>,
    params?: IHttpParams
  ): R {
    // AxiosResponse and our HttpResponse share the same properties.
    // So we can use it directly, saving CPU and memory.
    // Otherwise, we would map the axios response to our own model.
    this._latestResponse = response;
    /* TODO : manage params.requestName through an events[]. See infra-front http.ts */
    //FIXME: should we check response.status and only accept if range is 2xx ?
    return response.data;
  }

  get latestResponse(): IHttpResponse {
    return this._latestResponse;
  }

  isResponseError(): boolean {
    return (
      this.latestResponse.status < 200 || this.latestResponse.status >= 300
    );
  }

  get<R = any>(url: string, params?: IHttpParams): Promise<R> {
    // @ts-expect-error promise unknown
    return this.axios
      .get<R>(this.toCdnUrl(url), this.toAxiosConfig(params))
      .then((r: any) => this.mapAxiosResponse(r, params))
      .catch<R>((e: any) => this.mapAxiosError(e, params));
  }
  post<R = any>(url: string, data?: any, params?: IHttpParams): Promise<R> {
    // @ts-expect-error promise unknown
    return this.axios
      .post<R>(url, data, this.toAxiosConfig(params))
      .then((r: any) => this.mapAxiosResponse(r, params))
      .catch<R>((e: any) => this.mapAxiosError(e, params));
  }
  postFile<R = any>(url: string, data: any, params?: IHttpParams): Promise<R> {
    const p = this.toAxiosConfig(params);
    if (p.headers && p.headers['Content-Type']) {
      delete p.headers['Content-Type'];
    }
    // @ts-expect-error promise unknown
    return this.axios
      .post<R>(url, data, p)
      .then((r: any) => this.mapAxiosResponse(r, params))
      .catch<R>((e: any) => this.mapAxiosError(e, params));
  }
  postJson<R = any>(url: string, json: any, params?: IHttpParams): Promise<R> {
    const p = this.toAxiosConfig();
    if (p.headers) p.headers['Content-Type'] = 'application/json';
    // @ts-expect-error promise unknown
    return this.axios
      .post<R>(url, json, this.toAxiosConfig(params))
      .then((r: any) => this.mapAxiosResponse(r, params))
      .catch<R>((e: any) => this.mapAxiosError(e, params));
  }
  put<R = any>(url: string, data?: any, params?: IHttpParams): Promise<R> {
    // @ts-expect-error promise unknown
    return this.axios
      .put<R>(url, data, this.toAxiosConfig(params))
      .then((r: any) => this.mapAxiosResponse(r, params))
      .catch<R>((e: any) => this.mapAxiosError(e, params));
  }
  /*
    putFile(url: string, data:FormData, opt?:any) {
        //TODO
        return this.axios.putFile(url, data, opt).then( r => this.mapAxiosResponse(r,params));
    }
*/
  putJson<R = any>(url: string, json: any, params?: IHttpParams): Promise<R> {
    const p = this.toAxiosConfig(params);
    if (p.headers) p.headers['Content-Type'] = 'application/json';
    // @ts-expect-error promise unknown
    return this.axios
      .put<R>(url, json, p)
      .then((r: any) => this.mapAxiosResponse(r, params))
      .catch<R>((e: any) => this.mapAxiosError(e, params));
  }
  delete<R = any>(url: string, params?: IHttpParams): Promise<R> {
    // @ts-expect-error promise unknown
    return this.axios
      .delete<R>(url, this.toAxiosConfig(params))
      .then((r: any) => this.mapAxiosResponse(r, params))
      .catch<R>((e: any) => this.mapAxiosError(e, params));
  }
  deleteJson<R = any>(url: string, json: any): Promise<R> {
    // @ts-expect-error promise unknown
    return this.axios
      .delete<R>(url, { data: json })
      .then((r: any) => this.mapAxiosResponse(r))
      .catch<R>((e: any) => this.mapAxiosError(e));
  }

  getScript<R = any>(
    url: string,
    params?: IHttpParams,
    variableName?: string
  ): Promise<R> {
    const resultName = variableName ?? 'exports';
    const p = this.toAxiosConfig(params);
    if (p.headers) p.headers['Accept'] = 'application/javascript';
    return this.axios
      .get<string>(this.toCdnUrl(url), p)
      .then((r: any) => this.mapAxiosResponse(r, params))
      .then((r: any) => {
        try {
          const securedScript = `"use strict";var ${
            resultName.split('.')[0]
          }={};${r};return ${resultName};`;
          const result = Function(securedScript)();
          return result;
        } catch (e) {
          const result = r;
          return result;
        }
      })
      .catch<R>((e: any) => {
        this.mapAxiosError(e, params);
        throw e;
      });
  }

  loadScript(url: string, params?: IHttpParams): Promise<void> {
    return loadedScripts[url]
      ? Promise.resolve()
      : this.getScript(url, params).then((res) => {
          loadedScripts[url] = true;
        });
  }
}
