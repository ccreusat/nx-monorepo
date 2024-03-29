import { Control, Controller, FieldValues, Validate } from 'react-hook-form';

import Select from '../../../components/select/select';
import { ageOptions } from '../constants/age-options';
import { FormDataProps } from '../hooks/use-publish-modal';

export const AgeSelect = ({
  name,
  control,
  placeholderOption,
  validate,
}: {
  name: 'ageMin' | 'ageMax';
  control: Control<FormDataProps, any>;
  placeholderOption: string;
  validate:
    | Validate<any, FieldValues>
    | Record<string, Validate<any, FieldValues>>
    | undefined;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: true,
        validate,
      }}
      render={({ field: { onChange } }) => {
        return (
          <Select
            block
            size="md"
            onValueChange={onChange}
            options={ageOptions}
            aria-required={true}
            placeholderOption={placeholderOption}
          />
        );
      }}
    />
  );
};

export default AgeSelect;
