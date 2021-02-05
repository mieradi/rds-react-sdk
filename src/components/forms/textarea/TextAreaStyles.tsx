/**
 * @name TextAreaStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';
import { IErrorStyles } from '../../../types/forms/IErrorStyles';

interface TextAreaStylesProps extends IErrorStyles {}

export const TextAreaStyles = styled.div<TextAreaStylesProps>`
  textarea:focus {
    outline: ${({ hasError }) => (hasError ? ' none !important' : 'default')};
    border: ${({ hasError }) =>
      hasError ? '2px solid var(--red)' : 'default'};
  }
`;
