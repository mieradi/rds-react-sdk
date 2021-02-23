/**
 * @name CTALinkStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';
import {
  ButtonBaseStyles,
  IButtonBaseStyles,
} from '../button/ButtonBaseStyles';

interface ICTALinkStylesProps extends IButtonBaseStyles {
  url: string;
  backgroundColor?: string;
}

export const CTALinkStyles = styled.a.attrs<ICTALinkStylesProps>(({ url }) => ({
  href: url,
}))<ICTALinkStylesProps>`
  ${ButtonBaseStyles}

  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'var(--red)'};
  border-radius: 0.3rem;
  display: inline-flex;

  svg {
    width: 15px;
    margin: 0 15px;
  }
  svg path {
    fill: white;
  }

  &:hover svg path {
    fill: white;
  }
  svg {
    margin-right: 8px;
    margin-left: ${({ iconPosition, icon }) =>
      icon && iconPosition === 'left' ? '0px' : '10px'};
  }
  &:hover {
    background-color: var(--black);
  }
`;
