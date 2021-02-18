/**
 * @name DropdownMenuStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';

interface DropdownMenuStylesProps {}

export const DropdownMenuStyles = styled.li<DropdownMenuStylesProps>`
  
  ul {
    background: white;
    display: flex;
    flex-direction: column;
    li {
      width: 100%;
    }
  }
`;
