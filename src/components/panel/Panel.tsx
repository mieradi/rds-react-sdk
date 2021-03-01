/**
 * @name Panel
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import {
  IDetectClick,
  handleDetectOutsideClick,
} from '@utils/handleDetectClick';
import React, { useEffect, useRef, useState } from 'react';
import { PanelActionsStyles } from './PanelActionsStyles';
import { PanelStyles } from './PanelStyles';

interface PanelProps {
  title?: string;
  children: React.ReactNode;
  submenu?: React.ReactNode;
  actions?: React.ReactNode;
}

export const Panel: React.FC<PanelProps> = ({
  children,
  title,
  submenu,
  actions,
}): JSX.Element => {
  const [dropdownIsActive, setDropdownIsActive] = useState<boolean>(false);
  const hasValidSubMenu = React.isValidElement(submenu);
  const hasValidActions = React.isValidElement(actions);
  const [
    hasClickedOutsideTarget,
    setHasClickedOutsideTarget,
  ] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const args: IDetectClick = {
      ref: buttonRef,
      setDropdownIsActive,
      setHasClickedOutsideTarget,
    };
    handleDetectOutsideClick(args);
  }, [hasClickedOutsideTarget]);

  return (
    <PanelStyles hasSubmenu={hasValidSubMenu}>
      <header>
        <h2>{title}</h2>

        {hasValidActions && <PanelActionsStyles>{actions}</PanelActionsStyles>}

        {hasValidSubMenu && (
          <button
            ref={buttonRef}
            onClick={() => setDropdownIsActive(dropdownIsActive ? false : true)}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.77 14.538A2.77 2.77 0 1 0 2.77 9a2.77 2.77 0 0 0 0 5.538zm9.23 0A2.77 2.77 0 1 0 12 9a2.77 2.77 0 0 0 0 5.538zm12-2.769a2.77 2.77 0 1 1-5.538 0 2.77 2.77 0 0 1 5.538 0z"></path>
            </svg>
          </button>
        )}
        {hasValidSubMenu && dropdownIsActive && submenu}
      </header>
      {children}
    </PanelStyles>
  );
};
