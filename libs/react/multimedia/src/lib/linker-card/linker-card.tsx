import { useMemo } from 'react';

import { Users } from '@ccreusat-monorepo/icons';
import clsx from 'clsx';
import { IResource } from '@ccreusat-monorepo/client';

import {
  AppIcon,
  Card,
  CardProps,
  Image,
  useDate,
} from '@ccreusat-monorepo/ui-library';

export interface LinkerCardProps extends CardProps {
  /**
   * Resource to render as a card
   * */
  doc: IResource;
}

export const LinkerCard = ({
  doc,
  isClickable = true,
  isSelectable = false,
  isSelected = false,
  onClick,
  className,
}: LinkerCardProps) => {
  const { fromNow } = useDate();

  const { fromDate } = useMemo(
    () => ({
      fromDate: fromNow(doc.modifiedAt),
    }),
    [fromNow, doc]
  );

  return (
    <Card
      className={clsx('card-linker shadow-none', className)}
      isClickable={isClickable}
      isSelectable={isSelectable}
      isSelected={isSelected}
      onClick={onClick}
    >
      <Card.Body space="8">
        <div className="card-image ps-8 pe-4">
          {doc.thumbnail && doc.thumbnail.length > 0 ? (
            <Image
              alt=""
              height={48}
              width={48}
              src={doc.thumbnail}
              objectFit="cover"
              className="rounded h-full"
              style={{ aspectRatio: 1 / 1 }}
            />
          ) : (
            <AppIcon
              app={doc.application}
              iconFit="ratio"
              size="48"
              variant="rounded"
            />
          )}
        </div>

        <div className="w-100">
          <Card.Text>{doc.name}</Card.Text>
          <Card.Text className="text-black-50">{doc?.creatorName}</Card.Text>
        </div>

        <div className="d-none d-md-block text-black-50 ps-4 pe-8">
          <Card.Text>{fromDate}</Card.Text>
        </div>

        {doc.shared && (
          <div className="ps-4 pe-8">
            <Users width="20" height="20" />
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

LinkerCard.displayName = 'LinkerCard';

export default LinkerCard;
