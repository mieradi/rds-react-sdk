import React from 'react';
import { AsideStyles } from './AsideStyles';
interface AsideProps {
  isIntranet?: boolean;
  children: React.ReactNode;
}
export const Aside: React.FC<AsideProps> = ({
  children,
  isIntranet,
}): JSX.Element => {
  return (
    <AsideStyles className="multicol__nav">
      {isIntranet ? (
        children
      ) : (
        <div className="b-menu b-menu--sidenav">
          <nav
            className="c-nav c-nav--sidenav"
            role="presentation"
            aria-label="Main Navigation"
          >
            <ul className="nav__menu">{children}</ul>
          </nav>
        </div>
      )}
    </AsideStyles>
  );
};
