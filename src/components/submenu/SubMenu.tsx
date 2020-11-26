/**
 * @name SubMenu
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
import React from 'react';
import {
  SubMenuStyles,
  SubMenuContainerStyles,
} from '@/components/submenu/SubMenuStyles';

interface SubMenuProps {
  children: React.ReactNode;
  position?: string;
  hasDividers?: boolean;
}

export const SubMenu: React.FC<SubMenuProps> = ({
  children,
  position,
  hasDividers,
}): JSX.Element => {
  return (
    <SubMenuContainerStyles position={position}>
      <SubMenuStyles position={position} hasDividers={hasDividers}>
        {children}
      </SubMenuStyles>
    </SubMenuContainerStyles>
  );
};
