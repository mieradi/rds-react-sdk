import styled from 'styled-components';
import { IErrorStyles } from '../../../types/forms/IErrorStyles';
/**
 * @name InputStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

interface InputStylesProps extends IErrorStyles {}

export const InputStyles = styled.span<InputStylesProps>`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  input:focus {
    outline: ${({ hasError }) => (hasError ? ' none !important' : 'default')};
    border: ${({ hasError }) =>
      hasError ? '2px solid var(--red)' : 'default'};
  }
`;
