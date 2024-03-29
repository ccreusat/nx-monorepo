import { ReactNode } from 'react';

import clsx from 'clsx';

import { useFormControl } from './form.context';

export const FormText = ({ children }: { children: ReactNode }) => {
  const { status } = useFormControl();
  const classes = clsx('form-text', {
    'is-invalid': status === 'invalid',
    valid: status === 'valid',
  });

  return (
    <p className={classes}>
      <em>{children}</em>
    </p>
  );
};

FormText.displayName = 'Text';

export default FormText;
