import { ReactNode } from 'react';

import clsx from 'clsx';

import { useModalContext } from './modal.context';

export interface ModalBodyProps {
  /**
   *Children
   */
  children: ReactNode;
  /**
   * Optional class for styling purpose
   */
  className?: string | null;
}

/**
 * Modal Body
 */
const ModalBody = (props: ModalBodyProps) => {
  const { ariaDescriptionId } = useModalContext();
  const { children, className } = props;

  const classes = clsx('modal-body', className);

  return (
    <div id={ariaDescriptionId} className={classes}>
      {children}
    </div>
  );
};

ModalBody.displayName = 'Modal.Body';

export default ModalBody;
