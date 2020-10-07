/**
 * @name MultiColumnAM
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { MultiColumnAMStyles } from '../multiColumnAM/MultiColumnAMStyles';
interface MultiColumnAMProps {
  aside: JSX.Element;
}

export const MultiColumnAM: React.FC<MultiColumnAMProps> = ({
  aside,
  children,
}): JSX.Element => {
  return (
    <MultiColumnAMStyles>
      {aside}
      <main>{children}</main>
    </MultiColumnAMStyles>
  );
};
