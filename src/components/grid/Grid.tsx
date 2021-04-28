/**
 * @name Grid
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React, { Children, cloneElement } from 'react';
import { GridStyles } from './GridStyles';

interface IGrid {
  largeGap?: boolean;
  size?: 2 | 3 | 4;
  children?: React.ReactNode;
  reset?: any;
  errors?: any;
  register?: any;
  control?: any;
}

export const Grid: React.FC<IGrid> = ({
  largeGap,
  size,
  reset,
  errors,
  register,
  control,
  children,
}): JSX.Element => {
  return (
    <GridStyles largeGap={largeGap} size={size}>
      {Children.map(children, function (child: any) {
        return cloneElement(child, { reset, errors, register, control });
      })}
    </GridStyles>
  );
};
