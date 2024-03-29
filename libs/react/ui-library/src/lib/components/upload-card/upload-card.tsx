import { SuccessOutline, Wand, Close, Reset } from '@ccreusat-monorepo/icons';
import { useTranslation } from 'react-i18next';
import Image from '../image/image';
import usePaths from '../../core/use-paths/use-paths';
import { Status } from '../../types';
import Button from '../button/button';
import IconButton from '../button/button-icon';
import Card, { CardProps } from '../card/card';
import Loading from '../loading/loading';
import Tooltip from '../tooltip/tooltip';

export interface UploadItemProps {
  /**
   * File's image
   * */
  src: string;
  /**
   * File's name
   * */
  name: string;
  /**
   * File's info
   * */
  info?: { type: string; weight: string };
}

export interface UploadCardProps extends CardProps {
  /**
   * UploadItemProps
   * */
  item: UploadItemProps;
  /**
   * idle, loading, success, warning, error
   * */
  status?: Status;
  /**
   * Delete callback
   * */
  onDelete?: () => void;
  /**
   * Edit callback
   * */
  onEdit?: () => void;
  /**
   * Retry callback
   * */
  onRetry?: () => void;
}

export const UploadCard = ({
  item,
  status = 'idle',
  isClickable = false,
  isSelectable = false,
  onDelete,
  onEdit,
  onRetry,
}: UploadCardProps) => {
  const [imagePath] = usePaths();

  const { t } = useTranslation();

  const { src, name, info } = item;

  const isIdle = status === 'idle';
  const isLoading = status === 'loading';
  const isError = status === 'error';
  const isSuccess = status === 'success';

  const isTypeImage = info?.type.startsWith('image/');

  return (
    <Card
      isClickable={isClickable}
      isSelectable={isSelectable}
      className="card-upload"
    >
      <Card.Body>
        <div className="card-image">
          {isError ? (
            <Image
              alt=""
              src={`${imagePath}/common/image-status-error.svg`}
              objectFit="cover"
            />
          ) : (
            <Image
              alt=""
              src={src ?? ''}
              width="48"
              objectFit="cover"
              className="rounded"
              style={{ aspectRatio: 1 / 1 }}
            />
          )}
        </div>
        <div className="text-truncate">
          <Card.Text>{name}</Card.Text>
          <Card.Text className="caption">
            {isSuccess && (
              <em>
                {info?.type} {info?.weight && `- ${info.weight}`}
              </em>
            )}
            {isError && (
              <strong>
                <small className="text-danger caption">
                  {t('tiptap.upload.error')}
                </small>
              </strong>
            )}
          </Card.Text>
        </div>
        {!isIdle && (
          <div className="ms-auto">
            <div className="d-flex align-items-center gap-12">
              {isLoading && (
                <Tooltip
                  message={t('tiptap.tooltip.upload.loading')}
                  placement="top"
                >
                  <Loading
                    isLoading
                    loadingPosition="left"
                    className="text-secondary"
                  />
                </Tooltip>
              )}
              {isSuccess && (
                <Tooltip
                  message={t('tiptap.tooltip.upload.loaded')}
                  placement="top"
                >
                  <SuccessOutline className="text-success" />
                </Tooltip>
              )}
              {isError && (
                <Button
                  startIcon={<Reset />}
                  variant="ghost"
                  color="tertiary"
                  onClick={onRetry}
                >
                  {t('tiptap.upload.retry')}
                </Button>
              )}
              {!isIdle && <div className="vr"></div>}
              {isTypeImage && (
                <Tooltip
                  message={t('tiptap.tooltip.upload.edit')}
                  placement="top"
                >
                  <IconButton
                    icon={<Wand />}
                    variant="ghost"
                    aria-label={t('tiptap.tooltip.upload.loading')}
                    disabled={isLoading || !isSuccess}
                    onClick={onEdit}
                    color="secondary"
                  />
                </Tooltip>
              )}
              <Tooltip
                message={t('tiptap.tooltip.upload.delete')}
                placement="top"
              >
                <IconButton
                  icon={<Close />}
                  variant="ghost"
                  aria-label={t('tiptap.tooltip.upload.delete')}
                  color="tertiary"
                  onClick={onDelete}
                />
              </Tooltip>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

UploadCard.displayName = 'UploadCard';

export default UploadCard;
