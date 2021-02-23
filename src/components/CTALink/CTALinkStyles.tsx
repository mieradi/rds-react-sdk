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
  display: inline-flex;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'var(--red)'};
  border-radius: 0.3rem;
  ${ButtonBaseStyles}

  svg {
    top: 1px;
  }
`;
