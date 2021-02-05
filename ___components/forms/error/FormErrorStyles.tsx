import styled from 'styled-components';
/**
 * @name FormErrorStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

interface FormErrorStylesProps {}

export const FormErrorStyles = styled.span<FormErrorStylesProps>`
  display: block;
  font-weight: bold;
  color: var(--red);
  margin-top: 10px;
`;
