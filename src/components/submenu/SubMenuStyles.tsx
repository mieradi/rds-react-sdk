/**
 * @name SubMenuStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';

interface SubMenuStylesProps {
  position?: string;
  hasDividers?: boolean;
}

export const SubMenuStyles = styled.ul<SubMenuStylesProps>`
  position: absolute;
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  color: var(--black);
  background-color: white;
  background-clip: padding-box;
  min-width: 200px;
  transition: all 0.25s ease;
  border: 1px solid var(--grey-luke);
  border-radius: 4px;
  box-shadow: 0 3px 12px rgba(27, 31, 35, 0.15);

  /* arrow */
  &::before {
    top: -16px;
    left: 9px;
    border: 8px solid transparent;
    border-bottom-color: grey;
    position: absolute;
    display: inline-block;
    content: '';
    background-color: transparent;
  }

  /* . arrow outline */
  &::after {
    top: -17px;
    left: 7px;
    border: 10px solid transparent;
    border-bottom-color: white;
    position: absolute;
    display: inline-block;
    content: '';
    background-color: transparent;
  }

  a {
    padding: 8px 25px 8px 15px;
    height: auto;
    line-height: 1.25;
    font-size: 14px;
    font-weight: 400 !important;
    display: flex;
    align-items: center;
    color: black;

    &:hover {
      text-decoration: none;
      background-color: var(--grey-yoda);
      color: black;
    }
  }

  svg {
    margin-top: -2px;
    margin-right: 5px;
  }

  > li:nth-of-type(1) {
    margin-top: 5px;
  }

  li {
    height: auto !important;
  }

  ${({ position }) =>
    position === 'right' &&
    `

    right: 0;
    left: auto;

    /* arrow */
    &::before {
      top: -16px;
      right: 9px;
      left: auto;
    }

    /* arrow outline */
    &::after {
      top: -17px;
      right: 7px;
      left: auto;
    }

  `}

  ${({ hasDividers }) =>
    hasDividers &&
    `
    li:not(:first-child) {
        border-top: 1px solid var(--grey-yoda);
        }
`}
`;

/**
 * @name SubMenuContainerStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

interface SubMenuContainerStylesProps {
  position?: string;
}

export const SubMenuContainerStyles = styled.div<SubMenuContainerStylesProps>`
  position: absolute;
  ${({ position }) =>
    position === 'right' &&
    `
    right:14px;
    `}
  display: inline-block;
  z-index: 9999;
`;
