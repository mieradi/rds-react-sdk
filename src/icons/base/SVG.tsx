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
  width?: string;
  hoverColor?: string;
  isActive?: boolean;
}

export const SVG: React.FC<SVGProps> = ({
  fill,
  width,
  hoverColor,
  isActive,
  handleClick,
  children,
}): JSX.Element => {
  return (
    <SVGStyles
      width={width}
      fill={fill}
      hoverColor={hoverColor}
      isActive={isActive}
      {...(handleClick && { onClick: handleClick })}
    >
      {children}
    </SVGStyles>
  );
};
