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
  children: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({
  children,
  title,
}): JSX.Element => {
  return (
    <PanelStyles>
      <header>
        <h2>{title}</h2>
        <button id="search-button">
          <span>Actions</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.77 14.538A2.77 2.77 0 1 0 2.77 9a2.77 2.77 0 0 0 0 5.538zm9.23 0A2.77 2.77 0 1 0 12 9a2.77 2.77 0 0 0 0 5.538zm12-2.769a2.77 2.77 0 1 1-5.538 0 2.77 2.77 0 0 1 5.538 0z"></path>
          </svg>
        </button>
      </header>
      {children}
    </PanelStyles>
  );
};
