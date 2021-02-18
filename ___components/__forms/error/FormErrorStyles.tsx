/**
 * @name ErrorStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';
import { FormMessageStyles } from '@/components/__forms/message/FormMessageStyles';

interface ErrorStylesProps {}

export const ErrorStyles = styled.div<ErrorStylesProps>`
  input {
    border: 2px solid var(--red);
    background-color: var(--light-red);
  }

  ${FormMessageStyles} {
    display: block;
    color: var(--red);
  }

  fieldset {
    border: 2px solid #bf112b;
  }

  select {
    border: 2px solid #bf112b;
    background-color: #f9e6e9;
  }
`;
