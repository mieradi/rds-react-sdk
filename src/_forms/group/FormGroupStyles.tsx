import styled from 'styled-components';
/**
 * @name FormGroupStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
import { FormDescriptionStyles } from '@/components/_forms/description/FormDescriptionStyles';
interface FormGroupStylesProps {}

export const FormGroupStyles = styled.div<FormGroupStylesProps>`
  margin-top: -10px;

  & + ${FormDescriptionStyles} {
    margin-top: 20px;
  }
  fieldset {
    padding-bottom: 20px;
  }
`;
