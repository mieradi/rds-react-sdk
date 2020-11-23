/**
 * @name SVGStyles
 * @desc Base styled component for SVG icons
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';
import { SVGBase } from './SVGBase';
interface SVGStylesProps {
  fill?: string;
  hoverColor?: string;
  isActive?: boolean;
  isClickable?: boolean;
}

export const SVGStyles = styled(SVGBase)<SVGStylesProps>`
  fill: ${({ fill }) => (fill ? fill : 'var(--black)')};
  ${({ isClickable }) =>
    isClickable &&
    `
    cursor: pointer;
  `}

  &:hover {
    fill: ${({ hoverColor }) => (hoverColor ? hoverColor : 'inherit')};
  }
  /* Active state where color is the same as the hover state */
  ${({ isActive, hoverColor }) =>
    isActive && typeof hoverColor === 'string' && `fill: ${hoverColor}`}
`;
