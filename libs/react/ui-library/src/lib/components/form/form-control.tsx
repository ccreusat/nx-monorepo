import { forwardRef, ReactNode, Ref, useMemo } from 'react';

import { Context } from './form.context';
import FormText from './form-text';
import Label from '../label/label';
import Input from '../input/input';

export interface FormControlProps extends React.ComponentPropsWithRef<'div'> {
  /**
   * For accessibility
   */
  id: string;
  /**
   * Is field optional ?
   */
  isOptional?: boolean;
  /**
   * Is field required ?
   */
  isRequired?: boolean;
  /**
   * Is field readonly ?
   */
  isReadOnly?: boolean;
  /**
   * Label, Input and Text
   */
  children: ReactNode;
  /**
   * Optional class for styling purpose
   */
  className?: string;
  /**
   * Status to handle Form Validation
   */
  status?: 'valid' | 'invalid';
}

/**
 * Form Control Component
 */

const Root = forwardRef(
  (
    {
      children,
      className,
      id,
      isOptional,
      isReadOnly,
      isRequired,
      status,
      ...restProps
    }: FormControlProps,
    ref?: Ref<HTMLDivElement>
  ) => {
    const values = useMemo(
      () => ({
        id,
        isOptional: isOptional!,
        isRequired: isRequired!,
        isReadOnly: isReadOnly!,
        status: status!,
      }),
      [id, isOptional, isReadOnly, isRequired, status]
    );

    return (
      <Context.Provider value={values}>
        <div ref={ref} className={className} {...restProps}>
          {children}
        </div>
      </Context.Provider>
    );
  }
);

export const FormControl = Object.assign(Root, {
  Label,
  Input,
  Text: FormText,
});

Root.displayName = 'FormControl';

export default FormControl;
