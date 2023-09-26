import { APP, IResource, RESOURCE, ResourceType } from "..";
import {
  BlogUpdate,
  CreateParameters,
  CreateResult,
  UpdateResult,
} from "./interface";
import { ResourceService } from "./ResourceService";

export class BlogResourceService extends ResourceService {
  async create(parameters: CreateParameters): Promise<CreateResult> {
    const fixThumb = parameters.thumbnail
      ? await this.getThumbnailPath(parameters.thumbnail)
      : "";

    const apiPath = parameters.public ? "/blog/pub" : "/blog";

    const res = await this.http.post<CreateResult>(apiPath, {
      title: parameters.name,
      description: parameters.description,
      visibility: parameters.public ? "PUBLIC" : "OWNER",
      thumbnail: fixThumb,
      trashed: false,
      folder: parameters.folder,
      slug: parameters.public ? parameters.slug : "",
      "publish-type": parameters.publishType || "RESTRAINT",
      "comment-type": "IMMEDIATE",
    });

    this.checkHttpResponse(res);

    return res;
  }

  async update(parameters: BlogUpdate): Promise<UpdateResult> {
    const fixThumb = await this.getThumbnailPath(parameters.thumbnail);
    const res = await this.http.put<IResource>(`/blog/${parameters.entId}`, {
      trashed: parameters.trashed,
      _id: parameters.entId,
      title: parameters.name,
      thumbnail: fixThumb,
      description: parameters.description,
      visibility: parameters.public ? "PUBLIC" : "OWNER",
      slug: parameters.public ? parameters.slug : "",
      "publish-type": parameters["publish-type"] || "RESTRAINT",
      "comment-type": "IMMEDIATE",
    });
    this.checkHttpResponse(res);
    return { thumbnail: fixThumb, entId: parameters.entId } as UpdateResult;
  }
  getResourceType(): ResourceType {
    return RESOURCE.BLOG;
  }
  getApplication(): string {
    return APP.BLOG;
  }
  getFormUrl(folderId?: string): string {
    return folderId
      ? `/blog?folderid=${folderId}#/edit/new`
      : `/blog#/edit/new`;
  }
  getViewUrl(resourceId: string): string {
    return `/blog#/view/${resourceId}`;
  }
  getPrintUrl(resourceId: string, withComment?: boolean): string {
    return `/blog/print/blog#/print/${resourceId}?comments=${
      withComment || true
    }`;
  }
}
ResourceService.register(
  { application: RESOURCE.BLOG, resourceType: RESOURCE.BLOG },
  (context) => new BlogResourceService(context),
);
