import styled from 'styled-components';
/**
 * @name InputStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

interface InputStylesProps {}

export const InputStyles = styled.div<InputStylesProps>`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
