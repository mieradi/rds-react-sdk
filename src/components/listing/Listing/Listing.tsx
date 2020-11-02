import React from 'react';
import { ListingStyles } from './ListingStyles';

interface ListingProps {
  children: React.ReactNode;
  heading?: string;
  accordion?: boolean;
  news?: boolean;
  event?: boolean;
  people?: boolean;
  icon?: boolean;
  video?: boolean;
}

export const Listing: React.FC<ListingProps> = ({
  children,
  heading,
  accordion,
  news,
  event,
  people,
  icon,
  video,
}): JSX.Element => {
  const styleProps = {
    accordion,
    news,
    event,
    people,
    icon,
    video,
  };
  return (
    <>
      {heading && <h2 className="c-heading u-no-border">{heading}</h2>}
      <ListingStyles {...styleProps}>
        <ul itemScope itemType="http://schema.org/ItemList">
          {/* only render li > * here */}
          {children}
        </ul>
      </ListingStyles>
    </>
  );
};
