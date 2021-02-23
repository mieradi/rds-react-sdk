/**
 * @name ModalStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';

interface ModalStylesProps {}

export const ModalStyles = styled.div<ModalStylesProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

/**
 * @name InnerModalWrapperStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

interface InnerModalWrapperStylesProps {}

export const InnerModalWrapperStyles = styled.div<InnerModalWrapperStylesProps>`
  svg:first-child {
    position: relative;
    display: block;
    margin-left: 95%;
    top: -25px;
  }
`;
