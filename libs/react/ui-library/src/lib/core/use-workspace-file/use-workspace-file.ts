import { WorkspaceElement, odeServices } from '@ccreusat-monorepo/client';

export const useWorkspaceFile = () => {
  /**
   * This function create a file into workspace if the uri is not from workspace
   * If the uri is an URI from workspace it only updates it
   *
   * @param param0.alt the alternative text related to the file
   * @param param0.legend the legend text related to the file
   * @param param0.blob the file as Blob
   * @param param0.uri the previous URI of this file (or undefined if this is a new file)
   * @param param0.parentId the folder parentId
   * @param param0.application the application related to this file
   * @returns the new workspace URI
   */
  const createOrUpdate = async ({
    alt,
    uri,
    blob,
    legend,
    parentId,
    application,
  }: {
    blob: Blob;
    uri?: string;
    alt?: string;
    legend?: string;
    application?: string;
    parentId?: string;
  }) => {
    const regex = /\/workspace\/document\/([0-9a-fA-F-]+)/;
    const matches = (uri ?? '').match(regex);
    if (matches && matches.length === 2) {
      const uuid = matches[1];
      await odeServices.workspace().updateFile(uuid, blob, { alt, legend });
      return `/workspace/document/${uuid}`;
    } else {
      const res = await odeServices
        .workspace()
        .saveFile(blob, { application, parentId });
      return `/workspace/document/${res._id}`;
    }
  };
  // const get = () => {}
  const create = async (file: File) => {
    return await odeServices.workspace().saveFile(file);
  };

  // const put = () => {}

  const remove = async (file: WorkspaceElement | WorkspaceElement[]) => {
    return await odeServices
      .workspace()
      .deleteFile(Array.isArray(file) ? file : [file]);
  };

  return {
    createOrUpdate,
    // get,
    create,
    // put,
    remove,
  };
};

export default useWorkspaceFile;
