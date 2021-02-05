import styled from 'styled-components';
/**
 * @name FormDescription
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

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
