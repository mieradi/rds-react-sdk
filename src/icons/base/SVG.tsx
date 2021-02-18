/**
 * @name SVG
 * @desc Main component wrapper for one color SVGs
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { SVGStyles } from './SVGStyles';

interface SVGProps {
  handleClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
  children: React.ReactNode;
  fill?: string;
  width?: number;
  hoverColor?: string;
  isActive?: boolean;
  isClickable?: boolean;
  viewBox?: string;
}

export const SVG: React.FC<SVGProps> = ({
  fill,
  width,
  hoverColor,
  isActive,
  handleClick,
  isClickable,
  viewBox,
  children,
}): JSX.Element => {
  return (
    <SVGStyles
      viewBox={viewBox}
      width={width}
      fill={fill}
      hoverColor={hoverColor}
      isActive={isActive}
      isClickable={isClickable}
      {...(handleClick && { onClick: handleClick })}
    >
      {children}
    </SVGStyles>
  );
};
