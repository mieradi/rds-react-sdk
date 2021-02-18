/**
 * @name Form
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';
import { greaterThan } from '@components/cuMediaQueries';

interface FormStylesProps {
  isRequired?: boolean;
}

export const FormStyles = styled.form<FormStylesProps>`
  /* Add spacing to all main form elements except the last one */
  /* .form__field:not(:last-child) {
    margin-bottom: 30px;
  } */
  input:not(input[type='file'], input[type='radio'], input[type='checkbox']),
  div,
  textarea {
    margin-bottom: 30px;
  }

  margin-bottom: 30px;
  label,
  legend {
    display: block;
    font-size: var(--pixel16);
    font-weight: 500;
    margin-bottom: 10px;
    ${greaterThan('s')`
      font-size: var(--pixel18);
    `}
  }

  input {
    max-width: 500px;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    font-size: var(--pixel16);
    border: 1px solid var(--grey-kenobi);
    border-radius: 4px;
    padding: 15px;
    background-color: white;

    &:disabled {
      background-color: var(--grey);
    }
  }
  /* Fieldset */
  fieldset {
    padding: 10px 20px;
    border: 1px solid var(--grey-kenobi);
    border-radius: 4px;
  }

  /* Required */

  ${({ isRequired }) =>
    isRequired &&
    `
        color: var(--red);
        padding-right: 5px;
    `}/* Form Messages */
`;
