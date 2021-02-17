/**
 * @name SVGStyles
 * @desc Base styled component for SVG icons
 * @param {} param desc
 * @returns returns desc
 */

import styled, { css } from 'styled-components';
import { ISVG, SVGBase } from '@icons/base/SVGBase';
interface SVGStylesProps extends ISVG {
  fill?: string;
  hoverColor?: string;
  isActive?: boolean;
  isClickable?: boolean;
  width?: number;
  viewBox?: string;
}

export const SVGStyles = styled(SVGBase)<SVGStylesProps>`
  width: ${({ width }) =>
    width ? width + 'px !important' : '25px !important'};
  fill: ${({ fill }) => (fill ? fill : 'var(--black)')};
  fill: var(--black);
  ${({ isClickable }) =>
    isClickable &&
    css`
      cursor: pointer;
    `};

  &:hover {
    fill: ${({ hoverColor }) => (hoverColor ? hoverColor : 'var(--black)')};
  }
  /* Active state where color is the same as the hover state */
  ${({ isActive, hoverColor }) =>
    isActive && typeof hoverColor === 'string' && `fill: ${hoverColor}`}
`;
