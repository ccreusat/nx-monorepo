import { APP, IResource, RESOURCE, ResourceType } from "..";
import { ScrapbookUpdate, UpdateResult } from "./interface";
import { ResourceService } from "./ResourceService";

export class ScrapbookResourceService extends ResourceService {
  async update(parameters: ScrapbookUpdate): Promise<UpdateResult> {
    const fixThumb = await this.getThumbnailPath(parameters.thumbnail);
    const res = await this.http.put<IResource>(
      `/scrapbook/${parameters.entId}`,
      {
        trashed: parameters.trashed ? 1 : 0,        title: parameters.name,
        icon: fixThumb,
        subTitle: parameters.description,
      },
    );
    this.checkHttpResponse(res);
    return { thumbnail: fixThumb, entId: parameters.entId } as UpdateResult;
  }
  getResourceType(): ResourceType {
    return RESOURCE.SCRAPBOOK;
  }
  getApplication(): string {
    return APP.SCRAPBOOK;
  }
  getFormUrl(folderId?: string): string {
    return folderId
      ? `/scrapbook?folderid=${folderId}#/create-scrapbook/`
      : `/scrapbook#/create-scrapbook/`;
  }
  getViewUrl(resourceId: string): string {
    return `/scrapbook#/view-scrapbook/${resourceId}`;
  }
  getPrintUrl(resourceId: string): string {
    return `/scrapbook/print#/print-scrapbook/${resourceId}`;
  }
  getEditUrl(resourceId: string): string {
    return `/scrapbook#/edit-scrapbook/${resourceId}`;
  }
}

ResourceService.register(
  { application: RESOURCE.SCRAPBOOK, resourceType: RESOURCE.SCRAPBOOK },
  (context) => new ScrapbookResourceService(context),
);
