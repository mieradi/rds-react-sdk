/**
 * @name SearchStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';
import { greaterThan } from '@components/cuMediaQueries';

interface SearchStylesProps {
  isSmall?: boolean;
}

export const SearchStyles = styled.div<SearchStylesProps>`
  padding: 5px;
  background-color: white;
  border-radius: 50px;
  vertical-align: middle;
  border: 1px solid var(--grey-yoda);

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  ${greaterThan('s')`
      padding: 15px;
    `}

  label {
    display: none;
  }

  input {
    width: calc(100% - 57px);
    /* prevents browser from hijacking border, font sizes, and more */
    appearance: none;
    -webkit-appearance: none;
    border: none;
    font-family: var(--font-family);
    /* Needs to be at least 16px to avoid mobile Safari zoom */
    font-size: var(--pixel16);
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0 2px 0 10px;

    ${greaterThan('s')`
        font-size: var(--pixel18);
        `}

    &::placeholder {
      color: var(--grey-vader);
      opacity: 1;
      transition: opacity 0.35s ease-in-out;
    }

    &:focus::placeholder {
      opacity: 0.3;
      transition: opacity 0.35s ease-in-out;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    background: none;
    border: none;
    fill: var(--grey-vader);
    padding-right: 15px;
    display: inline;

    svg {
      width: 18px;

      ${greaterThan('s')`
          width: 20px;
        `}
    }
  }

  /* smaller version used in asides and panels */
  ${({ isSmall }) =>
    isSmall &&
    `
        padding: 0 !important;
        margin-bottom: 5px !important;

        input {
        width: calc(100% - 47px);
        /* Needs to be at least 16px to avoid mobile Safari zoom */
        font-size: var(--pixel13);
        }

        button {
        vertical-align: middle;
        margin-top: 4px;

        svg {
            width: 15px !important;
        }
        }
    `}
`;
