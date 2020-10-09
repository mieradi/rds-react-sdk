import React from 'react';
import { UBlockStyles } from '../../uBlock/UBlockStyles';
import { ListingStyles } from './ListingStyles';

interface ListingProps {
  children: React.ReactNode;
  options: {
    backgroundColor: string;
    heading?: string;
    width?: string;
    borderTop?: boolean;
  };
}

export const Listing: React.FC<ListingProps> = ({
  children,
  options: { heading, backgroundColor },
}): JSX.Element => {
  return (
    <>
      <UBlockStyles backgroundColor={backgroundColor}>
        {heading && <h2 className="c-heading u-no-border">{heading}</h2>}
        <ListingStyles>
          <ul itemScope itemType="http://schema.org/ItemList">
            {/* only render li > * here */}
            {children}
          </ul>
        </ListingStyles>
      </UBlockStyles>
    </>
  );
};
