/**
 * @name Modal
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import {
  ModalStyles,
  InnerModalWrapperStyles,
} from '@/components/modal/ModalStyles';
import { SVG } from '@/icons/base/SVG';

interface ModalProps {
  content: React.ReactNode;
  handleClose?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export const Modal: React.FC<ModalProps> = ({
  content,
  handleClose,
}): JSX.Element => {
  return (
    <ModalStyles>
      <InnerModalWrapperStyles>
        <span {...(handleClose && { onClick: handleClose })}>
          <SVG isClickable fill={'white'} width="15px">
            <path d="M15.396 12L24 20.604 20.604 24 12 15.396 3.396 24 0 20.604 8.604 12 0 3.396 3.396 0 12 8.604 20.604 0 24 3.396z" />
          </SVG>
        </span>

        {content}
      </InnerModalWrapperStyles>
    </ModalStyles>
  );
};
