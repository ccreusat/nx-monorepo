/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { forwardRef, useEffect } from 'react';

import { useTransition, animated } from '@react-spring/web';
import clsx from 'clsx';

import ModalBody from './modal-body';
import { ModalContext, ModalContextProps } from './modal.context';
import ModalFooter from './modal-footer';
import ModalHeader from './modal-header';
import ModalSubtitle from './modal-subtitle';
import useClickOutside from '../../hooks/use-click-outside/use-click-outside';
import useKeyPress from '../../hooks/use-keypress/use-keypress';
import useTrapFocus from '../../hooks/use-trap-focus/use-trap-focus';

export type ModalElement = HTMLDivElement;

export type ModalSize = 'md' | 'lg';

export interface ModalProps {
  /**
   * Modal id (useful when multiple modal on the same page)
   */

  id: string;

  /**
   * Is Modal Open
   */
  isOpen: boolean;

  /**
   * Function to call when closing modal
   */
  onModalClose: () => void;

  /**
   * Size of the modal (width)
   */
  size?: ModalSize;

  /**
   * Is modal scrollable (see https://getbootstrap.com/docs/5.0/components/modal/#scrolling-long-content)
   */
  scrollable?: boolean;

  /**
   * ID of the HTML element to receive focus when modal is active.
   */
  focusId?: string;

  /**
   * Modal takes the full height of the window
   */
  viewport?: boolean;

  /**
   * Children
   */
  children: React.ReactNode;
}

/**
 * Modal Component
 */
const Root = forwardRef<ModalElement, ModalProps>((props, ref) => {
  const {
    id,
    isOpen,
    onModalClose,
    size = 'md',
    viewport = false,
    scrollable = false,
    focusId,
    children,
  } = props;

  const ariaLabelId = `aria_label_${id}`;
  const ariaDescriptionId = `aria_desc_${id}`;

  const modalRef = useClickOutside(onModalClose);
  const trapRef = useTrapFocus();

  useKeyPress(onModalClose, ['Escape']);

  useEffect(() => {
    if (isOpen) {
      // a11y: trap focus into modal
      // a11y: prevent body scrolling while modale is active
      document.body.style.overflow = 'hidden';
      // a11y: set focus to focusId element
      // (if focusId is not setted then focus will go to close button at top right corner cf. ModalHeader)
      if (focusId) {
        const elem = document.getElementById(focusId);
        elem?.focus();
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [focusId, isOpen]);

  const modalClasses = clsx('modal fade', {
    'show d-block': isOpen,
    'modal-scrollable': scrollable,
    viewport: viewport,
    [`modal-${size}`]: size,
  });

  const dialogClasses = clsx('modal-dialog');

  const modalContextValue: ModalContextProps = {
    ariaLabelId,
    ariaDescriptionId,
    focusId,
  };

  const transition = useTransition(isOpen, {
    from: {
      x: -50,
      opacity: 0,
    },
    enter: {
      x: 0,
      opacity: 1,
    },
    leave: {
      x: 50,
      opacity: 0,
    },
  });

  return (
    <ModalContext.Provider value={modalContextValue}>
      {transition((style, isOpen) => (
        <>
          {isOpen && (
            <animated.div
              id={id}
              ref={ref}
              role="dialog"
              aria-modal="true"
              aria-labelledby={ariaLabelId}
              aria-describedby={ariaDescriptionId}
              className={modalClasses}
              style={style}
              tabIndex={-1}
            >
              <div
                id={`${id}_ref`}
                ref={(node) => {
                  modalRef.current = node;
                  if (isOpen) trapRef.current = node;
                }}
                className={dialogClasses}
              >
                <div className="modal-content">{children}</div>
              </div>
            </animated.div>
          )}
          {isOpen && (
            <animated.div
              className="modal-backdrop fade show"
              style={{ opacity: 0.65 }}
            ></animated.div>
          )}
        </>
      ))}
    </ModalContext.Provider>
  );
});

export const Modal = Object.assign(Root, {
  Header: ModalHeader,
  Subtitle: ModalSubtitle,
  Body: ModalBody,
  Footer: ModalFooter,
});

Root.displayName = 'Modal';

export default Modal;
