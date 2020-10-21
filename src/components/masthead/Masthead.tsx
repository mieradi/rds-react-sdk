import React, { useState, useEffect } from 'react';
import { MastheadStyles } from './MastheadStyles';
import { UBlockStyles } from '../uBlock/UBlockStyles';
// import { useWindowDimensions } from '@/customHooks/useWindowDimensions';

interface MastheadProps {
  title: string;
  logo: JSX.Element;
  children?: React.ReactNode;
}

export const Masthead: React.FC<MastheadProps> = ({
  children,
  title,
  logo,
}): JSX.Element => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);

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
    <UBlockStyles masthead borderTop full backgroundColor="white">
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
      </MastheadStyles>
    </UBlockStyles>
  );
};
