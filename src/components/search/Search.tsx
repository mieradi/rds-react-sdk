/**
 * @name Search
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { SearchStyles } from '@/components/search/SearchStyles';

interface SearchProps {
  handleOnChange(event: React.FormEvent<HTMLInputElement>): void;
  isSmall?: boolean;
}

export const Search: React.FC<SearchProps> = ({
  isSmall,
  handleOnChange,
}): JSX.Element => {
  return (
    <SearchStyles isSmall={isSmall}>
      <label htmlFor="searchform__input">Search</label>
      <input
        {...(handleOnChange && { onChange: handleOnChange })}
        id="searchform__input"
        tabIndex={0}
        name="s"
        type="search"
        autoComplete="off"
        placeholder="Search"
      />
    </SearchStyles>
  );
};
