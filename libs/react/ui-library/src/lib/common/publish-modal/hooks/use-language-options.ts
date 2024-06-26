import { useTranslation } from 'react-i18next';

export const useLanguageOptions = () => {
  const { t } = useTranslation();

  return [
    { value: 'de_DE', label: t('de_DE') },
    { value: 'en_EN', label: t('en_EN') },
    { value: 'ar_DZ', label: t('ar_DZ') },
    { value: 'es_ES', label: t('es_ES') },
    { value: 'fr_FR', label: t('fr_FR') },
    { value: 'it_IT', label: t('it_IT') },
    { value: 'ja_JP', label: t('ja_JP') },
    { value: 'zh_CN', label: t('zh_CN') },
    { value: 'pt_PT', label: t('pt_PT') },
    { value: 'ru_RU', label: t('ru_RU') },
    { value: 'bpr.other', label: t('bpr.other') },
  ];
};
