import { ReactNode, useId } from 'react';

import { UseMutationResult } from '@tanstack/react-query';
import {
  CreateParameters,
  CreateResult,
  ID,
  IFolder,
  UpdateParameters,
  UpdateResult,
  odeServices,
} from '@ccreusat-monorepo/client';
import { createPortal } from 'react-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useThumb } from './hooks/use-thumb';
import Button from '../../components/button/button';
import FormControl from '../../components/form/form-control';
import Heading from '../../components/heading/heading';
import ImagePicker from '../../components/image-picker/image-picker';
import Input from '../../components/input/input';
import Label from '../../components/label/label';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import Modal from '../../components/modal/modal';
import TextArea from '../../components/textarea/textarea';
import useResource from '../../core/use-resource/use-resource';
import useToast from '../../hooks/use-toast/use-toast';
import { useOdeClient } from '../../providers';

export interface FormInputs {
  title: string;
  description: string;
  enablePublic: boolean;
  formSlug: string;
}

interface BaseProps {
  isOpen: boolean;
  children?: ReactNode | ((...props: any) => ReactNode);
  onSuccess: () => void;
  onCancel: () => void;
}

interface CreateProps extends BaseProps {
  mode: 'create';
  createResource?: UseMutationResult<
    CreateResult,
    Error,
    CreateParameters,
    unknown
  >;
  currentFolder: Partial<IFolder>;
}

interface UpdateProps extends BaseProps {
  mode: 'update';
  updateResource?: UseMutationResult<
    UpdateResult,
    unknown,
    UpdateParameters,
    unknown
  >;
  resourceId: ID;
}

type Props = CreateProps | UpdateProps;

export const ResourceModal = ({
  isOpen,
  onCancel,
  onSuccess,
  children,
  ...props
}: Props) => {
  const { appCode: application, currentApp } = useOdeClient();
  const { t } = useTranslation();
  const { mode } = props;

  const toast = useToast();
  const formId = useId();

  const isCreating = mode === 'create';
  const isUpdating = mode === 'update';

  const resource = useResource(application, isUpdating ? props.resourceId : '');

  const {
    watch,
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, isValid },
  } = useForm<FormInputs>({
    mode: 'onChange',
    defaultValues: {
      description: isUpdating ? resource?.description : '',
      enablePublic: isUpdating ? resource?.public : false,
      title: isUpdating ? resource?.name : '',
      formSlug: isUpdating ? resource?.slug : '',
    },
  });

  const { thumbnail, handleDeleteImage, handleUploadImage } = useThumb({
    isUpdating,
    selectedResource: isUpdating ? resource : undefined,
  });

  const onSubmit: SubmitHandler<FormInputs> = async function (
    formData: FormInputs
  ) {
    try {
      const data = {
        description: formData.description || '',
        name: formData.title,
        public: formData.enablePublic,
        slug: formData.enablePublic ? formData.formSlug || '' : '',
        thumbnail,
      };

      if (isCreating) {
        const createParams = {
          ...data,
          folder:
            props.currentFolder?.id === 'default'
              ? undefined
              : parseInt(props.currentFolder?.id || ''),
          application,
        };

        if (props.createResource) {
          await props.createResource.mutateAsync(createParams);
        } else {
          await odeServices.resource(application).create(createParams);
        }
      } else {
        const updateParams = {
          ...data,
          entId: resource.assetId,
          trashed: resource.trashed,
        };

        if (props.updateResource) {
          await props.updateResource.mutateAsync(updateParams);
        } else {
          await odeServices.resource(application).update(updateParams);
        }
      }

      toast.success(
        <>
          <strong>
            {t(
              isCreating
                ? 'explorer.resource.created'
                : 'explorer.resource.updated'
            )}
          </strong>
          <p>
            {t('title')} : {formData.title}
          </p>
          <p>
            {t('description')} : {formData.description}
          </p>
          {application === 'blog' && (
            <p>
              Public:
              {formData.enablePublic
                ? t('explorer.enable.public.yes')
                : t('explorer.enable.public.no')}
            </p>
          )}
        </>
      );
      onSuccess();
    } catch (e) {
      console.error(e);
    }
  };

  if (isUpdating && !resource) return <LoadingScreen />;

  return createPortal(
    <Modal
      id={`${mode}-resource`}
      size="lg"
      isOpen={isOpen}
      onModalClose={onCancel}
    >
      <Modal.Header onModalClose={onCancel}>
        {t(
          `explorer.resource.editModal.header.${isCreating ? 'create' : 'edit'}`
        )}
      </Modal.Header>

      <Modal.Body>
        <Heading headingStyle="h4" level="h3" className="mb-16">
          {t('explorer.resource.editModal.heading.general')}
        </Heading>

        <form id={formId} onSubmit={handleSubmit(onSubmit)}>
          <div className="d-block d-md-flex gap-16 mb-24">
            <div>
              <ImagePicker
                app={currentApp}
                src={isUpdating ? resource?.thumbnail || '' : ''}
                label={t('explorer.imagepicker.label')}
                addButtonLabel={t('explorer.imagepicker.button.add')}
                deleteButtonLabel={t('explorer.imagepicker.button.delete')}
                onUploadImage={handleUploadImage}
                onDeleteImage={handleDeleteImage}
                className="align-self-center mt-8"
              />
            </div>

            <div className="col">
              <FormControl id="title" className="mb-16" isRequired>
                <Label>{t('title')}</Label>
                <Input
                  type="text"
                  defaultValue={isUpdating ? resource?.name : ''}
                  {...register('title', {
                    required: true,
                    pattern: {
                      value: /[^ ]/,
                      message: 'invalid title',
                    },
                  })}
                  placeholder={t(
                    'explorer.resource.editModal.title.placeholder'
                  )}
                  size="md"
                  aria-required={true}
                />
              </FormControl>
              <FormControl id="description" isOptional>
                <Label>{t('description')}</Label>
                <TextArea
                  defaultValue={isUpdating ? resource?.description : ''}
                  {...register('description')}
                  placeholder={t(
                    'explorer.resource.editModal.description.placeholder'
                  )}
                  size="md"
                />
              </FormControl>
            </div>
          </div>

          {typeof children === 'function'
            ? children(resource, isUpdating, watch, setValue, register)
            : children}
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button
          color="tertiary"
          onClick={onCancel}
          type="button"
          variant="ghost"
        >
          {t('explorer.cancel')}
        </Button>
        <Button
          form={formId}
          type="submit"
          color="primary"
          isLoading={isSubmitting}
          variant="filled"
          disabled={!isValid || isSubmitting}
        >
          {t(isCreating ? 'explorer.create' : 'save')}
        </Button>
      </Modal.Footer>
    </Modal>,
    document.getElementById('portal') as HTMLElement
  );
};

export default ResourceModal;
