/**
 * @name ListItemLoadingState
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { ListItemLoadingStyles } from './ListingLoadingStateStyles';

interface ListItemLoadingStateProps {
  rows: number;
}

export const ListItemLoadingState: React.FC<ListItemLoadingStateProps> = ({
  rows,
}): JSX.Element => {
  return (
    <React.Fragment>
      {[...Array(rows)].map((_, i) => (
        <ListItemLoadingStyles key={i}>
          <span className="c-loading-image w-100 h-100" />
          <span className="c-loading-text w-100" />
        </ListItemLoadingStyles>
      ))}
    </React.Fragment>
  );
};
