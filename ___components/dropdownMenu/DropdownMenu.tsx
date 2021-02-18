/**
 * @name DropdownMenu
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React, { useEffect, useRef, useState } from 'react';
import { DropdownMenuStyles } from '@/components/dropdownMenu/DropdownMenuStyles';
import { SubMenuStyles } from '@/components/submenu/SubMenuStyles';
import {
  handleDetectOutsideClick,
  handleClickInside,
  IDetectClick,
} from 'src/__helpers/handleDetectClick';

interface DropdownMenuProps {
  children: React.ReactNode;
  title: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  title,
}): JSX.Element => {
  const [dropdownIsActive, setDropdownIsActive] = useState<boolean>(false);

  const [
    hasClickedOutsideTarget,
    setHasClickedOutsideTarget,
  ] = useState<boolean>(false);

  const liRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const args: IDetectClick = {
      ref: liRef,
      setDropdownIsActive,
      setHasClickedOutsideTarget,
    };
    handleDetectOutsideClick(args);
  }, [hasClickedOutsideTarget]);

  return (
    <DropdownMenuStyles
      ref={liRef}
      onClick={() => {
        setDropdownIsActive(dropdownIsActive ? false : true);
        handleClickInside(setHasClickedOutsideTarget);
      }}
    >
      <>
        <button aria-expanded={dropdownIsActive}>{title}</button>
        {!hasClickedOutsideTarget && dropdownIsActive && (
          <SubMenuStyles>{children}</SubMenuStyles>
        )}
      </>
    </DropdownMenuStyles>
  );
};
