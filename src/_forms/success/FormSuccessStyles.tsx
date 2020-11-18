/**
 * @name FormSuccessStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';
import { FormMessageStyles } from '@/components/_forms/message/FormMessageStyles';

interface FormSuccessStylesProps {}

export const FormSuccessStyles = styled.div<FormSuccessStylesProps>`
  input {
    border: 2px solid var(--green);
    background-color: var(--light-green);
  }

  ${FormMessageStyles} {
    display: block;
    color: var(--green);
  }
`;
