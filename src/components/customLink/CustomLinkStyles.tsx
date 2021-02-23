/**
 * @name CustomLinkStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import { IButtonBaseStyles } from '@components/button/ButtonBaseStyles';
import styled from 'styled-components';

interface CustomLinkStylesProps extends IButtonBaseStyles {
  url: string;
}

export const CustomLinkStyles = styled.a.attrs<CustomLinkStylesProps>(
  ({ url }) => ({
    href: url,
  })
)<CustomLinkStylesProps>`
  transition: color 150ms;
  &:hover {
    color: var(--red);
  }
`;
