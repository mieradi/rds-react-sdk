/**
 * @name MultiColumnAM
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { MultiColumnAMStyles } from './MultiColumnAMStyles';
interface MultiColumnAMProps {
  aside: JSX.Element;
  mainContent: JSX.Element;
}

export const MultiColumnAM: React.FC<MultiColumnAMProps> = ({
  aside,
  mainContent,
}): JSX.Element => {
  return (
    <MultiColumnAMStyles>
      {aside}
      <main>{mainContent}</main>
    </MultiColumnAMStyles>
  );
};
