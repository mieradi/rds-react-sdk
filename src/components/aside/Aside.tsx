import React from 'react';
import { AsideStyles } from './AsideStyles';

export const Aside: React.FC = ({ children }): JSX.Element => {
  return (
    <AsideStyles className="multicol__nav u-sticky">
      <div className="b-menu b-menu--sidenav u-sticky">
        <nav
          className="c-nav c-nav--sidenav"
          role="presentation"
          aria-label="Main Navigation"
        >
          <ul className="nav__menu">{children}</ul>
        </nav>
      </div>
    </AsideStyles>
  );
};
