import { Role, WorkspaceElement } from '@ccreusat-monorepo/client';

import Component from '../../workspace/workspace';
import { useMediaLibraryContext } from '../media-library.context';

export const Workspace = () => {
  const { type, setResultCounter, setResult, multiple } =
    useMediaLibraryContext();

  function getDocumentRoleFilter(): Role | Role[] | null {
    switch (type) {
      case 'image':
        return 'img';
      case 'audio':
        return 'audio';
      case 'video':
        return 'video';
      default:
        return null; // = all document roles
    }
  }

  function handleSelect(result: WorkspaceElement[]) {
    setResultCounter(result.length);
    if (result.length) {
      setResult(result);
    } else {
      setResult();
    }
  }

  return (
    <Component
      roles={getDocumentRoleFilter()}
      onSelect={handleSelect}
      multiple={multiple}
      className="border rounded overflow-y-auto"
    ></Component>
  );
};
