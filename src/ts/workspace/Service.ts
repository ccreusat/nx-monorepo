import { FileTypeUtils } from "../utils/FileTypeUtils";
import { OdeServices } from "../services/OdeServices";
import { ID, WorkspaceElement, WorkspaceSearchFilter } from "./interface";

interface ElementQuery {
  /**
   * Keep only results having this criteria.
   * Defaults to "owner" in backend but must be specified here for clarity.
   */
  filter: WorkspaceSearchFilter;
  /** Restrict results to this element id only (kind of get). */
  id?: ID;
  /** Restrict results to element having this direct parent (folder). */
  parentId?: ID;
  /** Restrict results to elements having this ancestor (folder) at any level. */
  ancestorId?: string;
  /** Restrict results to the 1st folder hierarchy level. */
  onlyRoot?: boolean;
  /** Restrict results to this app. */
  application?: string;
  /** Restrict results to elements containing this text. */
  search?: string;
  /** Extend results to files AND folders. Defaults to false, with file results only. */
  includeall?: boolean;
  /** Max number of results needed. */
  limit?: number;
  /**
   * Skip the first N results.
   * Allows for pagination when used with the `limit` parameter.
   */
  skip?: number;
  /**
   * Restrict results to elements directly shared with the user.
   * => Handle this param through a dedicated method. Do not expose it directly.
   */
  directShared?: boolean;
  /**
   * Truthy when result is a tree ?
   * => Handle this param through a dedicated method. Do not expose it directly.
   */
  hierarchical?: boolean;
}

export class WorkspaceService {
  constructor(private context: OdeServices) {}
  private get http() {
    return this.context.http();
  }
  async saveFile(
    file: Blob | File,
    params?: {
      parentId?: string;
      visibility?: "public" | "protected";
      application?: string;
    },
  ) {
    //prepare metadata
    const tmpName = (file as File).name || "";
    const nameSplit = tmpName.split(".");
    const contentType = file.type || "application/octet-stream";
    const extension =
      nameSplit.length > 1 ? nameSplit[nameSplit.length - 1] : "";
    const metadata = {
      "content-type": contentType,
      filename: tmpName,
      size: file.size,
      extension,
      role: FileTypeUtils.getFileType(contentType, false, extension),
    };
    const name = tmpName.replace("." + metadata.extension, "");
    const fullname = metadata.extension
      ? name + "." + metadata.extension
      : name;
    //prepare form data
    const formData = new FormData();
    formData.append("file", file, fullname);
    //add query params
    const args = [];
    if (params?.visibility === "public" || params?.visibility === "protected") {
      args.push(`${params.visibility}=true`);
    }
    if (params?.application) {
      args.push(`application=${params.application}`);
    }
    if (metadata.role === "img") {
      args.push(`quality=1`);
    }
    if (params?.parentId) {
      args.push(`parentId=${params.parentId}`);
    }
    //make query
    const res = await this.http.postFile<WorkspaceElement>(
      `/workspace/document?${args.join("&")}`,
      formData,
    );
    return res;
  }

  private async acceptDocuments(params: ElementQuery) {
    const userInfo = await this.context.session().getUser();
    return (current: WorkspaceElement) => {
      //filter by trasherid
      if (current.deleted && current.trasher) {
        return userInfo?.userId == current.trasher;
      }
      //in case of directShared document => hide doc that are visible inside a folder
      //FIXME no more cache, how to do this ?
      // if(params.directShared && current.eParent){
      //   const isParentVisible = workspaceService._cacheFolders.find(folder => folder._id == current.eParent);
      //   if(isParentVisible){
      //       return false;
      //   }
      // }
      return true;
    };
  }

  private async fetchDocuments(
    params: ElementQuery,
  ): Promise<WorkspaceElement[]> {
    let filesO: WorkspaceElement[] =
      params.filter !== "external" || params.parentId
        ? await this.http.get<WorkspaceElement[]>("/workspace/documents", {
            queryParams: { ...params, _: new Date().getTime() },
          })
        : [];
    const filterFn = await this.acceptDocuments(params);
    return filesO.filter(filterFn);
  }

  async listDocuments(
    filter: WorkspaceSearchFilter,
    parentId?: ID,
  ): Promise<WorkspaceElement[]> {
    return this.fetchDocuments({ filter, parentId, includeall: true });
  }
}
