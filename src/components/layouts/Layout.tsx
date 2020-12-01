/**
 * @name Layout
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { LayoutStyles } from './LayoutStyles';
interface LayoutProps {
  children: React.ReactNode;
  aside?: JSX.Element;
  AM?: boolean;
  isIntranet?: boolean;
  MA?: boolean;
  AMA?: boolean;
  sidebarTop?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  aside,
  AM,
  isIntranet,
  MA,
  AMA,
  sidebarTop,
}): JSX.Element => {
  const layoutProps = {
    aside,
    AM,
    isIntranet,
    MA,
    AMA,
    sidebarTop,
  };
  return (
    <LayoutStyles {...layoutProps}>
      {aside && aside}
      {children}
    </LayoutStyles>
  );
};
