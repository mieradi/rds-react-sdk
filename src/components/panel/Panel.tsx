/**
 * @name Panel
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { PanelStyles } from './PanelStyles';

interface PanelProps {
  title?: string;
}

export const Panel: React.FC<PanelProps> = ({
  children,
  title,
}): JSX.Element => {
  return (
    <PanelStyles>
      <header className="panel__header">
        <h3>{title}</h3>
      </header>
      {children}
    </PanelStyles>
  );
};
