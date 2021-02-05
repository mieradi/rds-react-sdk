import styled from 'styled-components';
/**
 * @name FormGroupStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
import { FormDescriptionStyles } from '@/components/forms/_DEPRECATED_description/FormDescriptionStyles';
import { CheckBoxStyles } from '@/components/forms/checkbox/CheckBoxStyles';
import { RadioStyles } from '@/components/forms/radio/RadioStyles';
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
