import React, { useState, useEffect } from 'react';
import { MastheadStyles } from './MastheadStyles';
import { UBlockStyles } from '../uBlock/UBlockStyles';
// import { useWindowDimensions } from '@/customHooks/useWindowDimensions';

interface handleScrollListenersParams {
  window: Window;
  setPreviousScrollPosition: Function;
  setHasScrolled: Function;
  previousScrollPosition: number | null;
}

interface MastHeadProps {
  title: string;
  logo: JSX.Element;
  children?: React.ReactNode;
}

function handleScrollListeners({
  window,
  setPreviousScrollPosition,
  setHasScrolled,
  previousScrollPosition,
}: handleScrollListenersParams) {
  setPreviousScrollPosition(window.pageYOffset);
  setHasScrolled(window.pageYOffset > previousScrollPosition!);
}

export const MastHead: React.FC<MastHeadProps> = ({
  children,
  title,
  logo,
}): JSX.Element => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  useEffect(() => {
    setPreviousScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', (() => {
      handleScrollListeners({
        window,
        setPreviousScrollPosition,
        setHasScrolled,
        previousScrollPosition,
      });
    }) as EventListener);

    return () =>
      window.removeEventListener('scroll', (() => {
        handleScrollListeners({
          window,
          setPreviousScrollPosition,
          setHasScrolled,
          previousScrollPosition,
        });
      }) as EventListener);
  }, []);

  return (
    <UBlockStyles masthead borderTop full backgroundColor="white">
      <MastheadStyles hasScrolled={hasScrolled}>
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

export default MastHead;
