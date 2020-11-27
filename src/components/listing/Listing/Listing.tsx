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
  noLink?: boolean;
  noHover?: boolean;
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
  noLink,
  noHover,
}): JSX.Element => {
  const styleProps = {
    accordion,
    news,
    event,
    people,
    icon,
    video,
    noLink,
    noHover,
  };
  return (
    <>
      {heading && <h2>{heading}</h2>}
      <ListingStyles {...styleProps}>
        <ul itemScope itemType="http://schema.org/ItemList">
          {children}
        </ul>
      </ListingStyles>
    </>
  );
};
