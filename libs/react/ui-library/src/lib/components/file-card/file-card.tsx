import { Mic, Landscape, Video, TextPage } from '@ccreusat-monorepo/icons';
import clsx from 'clsx';
import {
  WorkspaceElement,
  odeServices,
  DocumentHelper,
  Role,
} from '@ccreusat-monorepo/client';

import FileIcon from '../file-icon/file-icon';
import Card, { CardProps } from '../card/card';
import useThumbnail from '../../hooks/use-thumbnail/use-thumbnail';

export interface FileCardProps extends CardProps {
  /**
   * WorkspaceElement
   * */
  doc: WorkspaceElement;
}

export const FileCard = ({
  doc,
  isClickable = true,
  isSelectable = false,
  isSelected = false,
  onClick,
  className,
}: FileCardProps) => {
  const type = DocumentHelper.getRole(doc);

  function getRoleMap(type: Role | 'unknown') {
    const roleMappings = {
      csv: {
        icon: '.CSV',
        color: 'bg-orange-200',
      },
      xls: {
        icon: '.XLS',
        color: 'bg-green-200',
      },
      doc: {
        icon: '.DOC',
        color: 'bg-blue-200',
      },
      txt: {
        icon: '.TXT',
        color: 'bg-blue-200',
      },
      pdf: {
        icon: '.PDF',
        color: 'bg-red-200',
      },
      audio: {
        icon: <Mic width={22} height={22} />,
        color: 'bg-red-200',
      },
      ppt: {
        icon: '.PPT',
        color: 'bg-yellow-200',
      },
      img: {
        icon: <Landscape width={22} height={22} />,
        color: 'bg-green-200',
      },
      video: {
        icon: <Video width={22} height={22} />,
        color: 'bg-purple-200',
      },
      zip: {
        icon: '.ZIP',
        color: 'bg-gray-300',
      },
      md: {
        icon: '.MD',
        color: 'bg-blue-200',
      },
      unknown: {
        icon: <TextPage width={22} height={22} />,
        color: 'bg-gray-300',
      },
    };

    return roleMappings[type] || roleMappings.unknown;
  }

  const file = clsx(
    'file position-relative rounded',
    getRoleMap(type ?? 'default')?.color ?? 'bg-yellow-200'
  );

  const mediaSrc =
    type === 'img' || type === 'video'
      ? odeServices.workspace().getThumbnailUrl(doc)
      : null;

  const hasThumbnail = useThumbnail(mediaSrc!);

  const imageStyles = hasThumbnail && {
    backgroundImage: `url(${mediaSrc})`,
    backgroundSize: 'cover',
  };

  return (
    <Card
      className={clsx('card-file', className)}
      isClickable={isClickable}
      isSelectable={isSelectable}
      isSelected={isSelected}
      onClick={onClick}
    >
      <Card.Body space="8">
        <div
          className={file}
          style={{
            aspectRatio: '16/10',
            ...imageStyles,
          }}
        >
          {type !== 'img' || (type === 'img' && !hasThumbnail) ? (
            <FileIcon type={type} roleMap={getRoleMap(type)} />
          ) : null}
        </div>
        <div className="mt-4">
          <Card.Text>{doc.name}</Card.Text>
          <Card.Text className="text-black-50">{doc?.ownerName}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

FileCard.displayName = 'FileCard';

export default FileCard;
