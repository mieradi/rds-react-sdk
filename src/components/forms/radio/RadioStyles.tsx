import styled from 'styled-components';
/**
 * @name RadioStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import { CheckBoxStyles } from '@components/forms/checkbox/CheckBoxStyles';

export const RadioStyles = styled(CheckBoxStyles)`
  label::before {
    border-radius: 50%;
    margin-top: 5px;
  }

  /* label::after { */
  input[type='radio']:checked + label::after {
    top: 3px;
    left: 3px;
    width: 13px;
    height: 13px;
    border: 7px solid var(--red);
    border-radius: 50%;
  }
`;
