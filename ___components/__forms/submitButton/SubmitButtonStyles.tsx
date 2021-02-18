import styled from 'styled-components';
/**
 * @name SubmitButtonStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

//! extends button
interface SubmitButtonStylesProps {}

export const SubmitButtonStyles = styled.div<SubmitButtonStylesProps>`
  display: block;
  width: initial;
  max-width: initial;
  min-height: 50px;
  font-size: var(--pixel18);
  font-weight: 600;
  color: white;
  text-align: center;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  padding: 10px 20px;
  border: 1px solid #0077cc;
  border-radius: 5px;
  background-image: linear-gradient(-180deg, #3f9feb 3%, #0268b0 100%);
  box-shadow: 0 5px 4px 0 rgba(130, 130, 130, 0.5), inset 0 1px 3px 0 #e9f5ff;

  &:hover {
    background-image: linear-gradient(-180deg, #50b2ff 3%, #0268b0 100%);
    cursor: pointer;
  }
`;
