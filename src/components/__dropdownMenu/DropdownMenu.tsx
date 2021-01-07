/**
 * @name DropdownMenu
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React, { useState } from 'react';
import { DropdownMenuStyles } from '@/components/__dropdownMenu/DropdownMenuStyles';
import { SubMenuStyles } from '@/components/submenu/SubMenuStyles';

interface DropdownMenuProps {
  children: React.ReactNode;
  title: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  title,
}): JSX.Element => {
  const [dropdownIsActive, setDropdownIsActive] = useState(false);

  return (
    <DropdownMenuStyles
      onClick={() => setDropdownIsActive(dropdownIsActive ? false : true)}
    >
      <>
        <button aria-expanded={dropdownIsActive}>{title}</button>
        {dropdownIsActive && <SubMenuStyles>{children}</SubMenuStyles>}
      </>
    </DropdownMenuStyles>
  );
};
