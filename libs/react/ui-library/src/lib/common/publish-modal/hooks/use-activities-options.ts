import { useTranslation } from 'react-i18next';

export const useActivitiesOptions = () => {
  const { t } = useTranslation();

  return [
    {
      value: 'bpr.activityType.classroomActivity',
      label: t('bpr.activityType.classroomActivity'),
    },
    {
      value: 'bpr.activityType.groupActivity',
      label: t('bpr.activityType.groupActivity'),
    },
    {
      value: 'bpr.activityType.personalActivity',
      label: t('bpr.activityType.personalActivity'),
    },
    {
      value: 'bpr.activityType.homework',
      label: t('bpr.activityType.homework'),
    },
    {
      value: 'bpr.activityType.exercize',
      label: t('bpr.activityType.exercize'),
    },
    {
      value: 'bpr.activityType.learningPath',
      label: t('bpr.activityType.learningPath'),
    },
    {
      value: 'bpr.activityType.courseElement',
      label: t('bpr.activityType.courseElement'),
    },
    {
      value: 'bpr.other',
      label: t('bpr.other'),
    },
  ];
};
