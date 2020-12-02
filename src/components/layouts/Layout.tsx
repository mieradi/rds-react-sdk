/**
 * @name Layout
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { LayoutStyles } from './LayoutStyles';
import { handleThrowError } from '@/helpers/handleThrowError';
interface LayoutProps {
  primaryAside?: JSX.Element;
  secondaryAside?: JSX.Element;
  AM?: boolean;
  isIntranet?: boolean;
  MA?: boolean;
  AMA?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  primaryAside,
  AM,
  isIntranet,
  MA,
  AMA,
  children,
  secondaryAside,
}): JSX.Element => {
  const layoutProps = {
    primaryAside,
    AM,
    isIntranet,
    MA,
    AMA,
  };
  if ((AM && MA) || (AMA && MA) || (AMA && AM))
    handleThrowError(
      'Layouts can only accept one Layout option. Please choose AM, MA, OR AMA'
    );
  return (
    <LayoutStyles {...layoutProps}>
      {!primaryAside &&
        handleThrowError('Layouts return one or two aside components.')}
      {!children && handleThrowError('Layouts must return child elements.')}
      {AMA &&
        !secondaryAside &&
        handleThrowError('AMA Layout must return a secondaryAside.')}
      {/* AM: aside/main layout */}
      {AM && !MA && primaryAside}
      {AM && !MA && <div>{children}</div>}
      {/* MA: main/aside layout */}
      {MA && !AM && <div>{children}</div>}
      {MA && !AM && primaryAside}
      {/* AMA: aside/main/aside layout */}
      {AMA && !AM && !MA && primaryAside}
      {AMA && !AM && !MA && <div>{children}</div>}
      {AMA && !AM && !MA && secondaryAside}
    </LayoutStyles>
  );
};
