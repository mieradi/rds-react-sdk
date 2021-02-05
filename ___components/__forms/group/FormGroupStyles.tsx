import styled from 'styled-components';
/**
 * @name FormGroupStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import { FormDescriptionStyles } from '@/components/__forms/description/FormDescriptionStyles';

export const FormGroupStyles = styled.div`
  margin-top: -10px;

  & + ${FormDescriptionStyles} {
    margin-top: 20px;
  }
  fieldset {
    padding-bottom: 20px;
  }
`;
