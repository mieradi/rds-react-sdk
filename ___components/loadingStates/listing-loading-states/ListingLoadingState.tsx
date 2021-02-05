/**
 * @name ListingLoadingState
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { ListingLoadingStateStyles } from './ListingLoadingStateStyles';

interface ListingLoadingStateProps {
  rows: number;
}

export const ListingLoadingState: React.FC<ListingLoadingStateProps> = ({
  rows,
}): JSX.Element => {
  return (
    <React.Fragment>
      {[...Array(rows)].map((_, i) => (
        <ListingLoadingStateStyles key={i}>
          <span className="c-loading-image w-100 h-100" />
          <span className="c-loading-text w-100" />
        </ListingLoadingStateStyles>
      ))}
    </React.Fragment>
  );
};
