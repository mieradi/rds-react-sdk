import styled from 'styled-components';
/**
 * @name FormDescriptionStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

// import { FileUploadStyles } from '../file/FileUploadStyles';
interface FormDescriptionStylesProps {}

export const FormDescriptionStyles = styled.p<FormDescriptionStylesProps>`
  font-size: 15px;
  margin: 0;

  & + input,
  & + textarea,
  & + select,
  & + .form__group,
  & + .form__upload {
    margin-top: 10px;
  }
`;
