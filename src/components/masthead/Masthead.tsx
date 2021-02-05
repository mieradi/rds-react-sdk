import React, { useState, useEffect } from 'react';
import {
  MastheadStyles,
  MastheadActionsStyles,
  MastheadHamburgerStyles,
} from './MastheadStyles';
import { UBlock } from '../UBlock/UBlock';

interface MastHeadProps {
  title: string;
  logo: JSX.Element;
  hamburger: JSX.Element;
  children?: React.ReactNode;
  actions?: JSX.Element;
  mobileIsActive: boolean;
}

export const MastHead: React.FC<MastHeadProps> = ({
  children,
  title,
  logo,
  hamburger,
  actions,
  mobileIsActive,
}): JSX.Element => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const base = 0;
    //scroll positon
    let lastScrollY = window.pageYOffset;
    //make sure we are just run our event listener callback once in each requestAnimationFrame
    let ticking = false;

    //update scroll positon and isScrollingUp var in state
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      //calculate scroll positon against prev scroll
      if (Math.abs(scrollY - lastScrollY) < base) {
        ticking = false;
        return;
      }
      //set state
      setIsScrollingUp(scrollY > lastScrollY ? false : true);
      //comparing last scroll position
      lastScrollY = scrollY > 0 ? scrollY : 0;
      //optimize
      ticking = false;
    };

    // init the updated Scroll position within animationFrame
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    //init onScroll in listener
    window.addEventListener('scroll', (() => onScroll()) as EventListener);

    //remove listener on cleanup
    return () =>
      window.removeEventListener('scroll', onScroll as EventListener);
  }, []);

  return (
    <UBlock masthead borderTop full backgroundColor="white">
      <MastheadStyles isScrollingUp={isScrollingUp}>
        <h1>
          <a href="/">
            {logo}
            {title}
          </a>
        </h1>
        <nav>
          <div
            className="c-nav c-nav--topnav"
            role="presentation"
            aria-label="Main Navigation"
          >
            <ul className="nav__menu nav__menu--top">{children}</ul>
          </div>
        </nav>
        {actions && <MastheadActionsStyles>{actions}</MastheadActionsStyles>}
        {hamburger && (
          <MastheadHamburgerStyles mobileIsOpen={mobileIsActive}>
            {hamburger}
          </MastheadHamburgerStyles>
        )}
      </MastheadStyles>
    </UBlock>
  );
};
