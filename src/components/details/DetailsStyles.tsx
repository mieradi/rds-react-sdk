/**
 * @name Details
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';
import { greaterThan } from '@components/cuMediaQueries';
// interface DetailsStylesProps {}

export const DetailsStyles = styled.div`
  div.b-details--figure {
    ${greaterThan('s')`
          display: grid;
          grid-gap: var(--grid-gutter);
          grid-template-columns: 220px auto;

      `}
  }

  figure {
    position: relative;
    margin: 20px 0;

    &:after {
      content: '';
      position: absolute;
      width: 25px;
      height: 1px;
      left: calc(50% - 10px);
      bottom: -10px;
      background: var(--red);
    }

    @media (min-width: var(--breakpoint-s)) {
      &:after {
        content: none;
      }
    }

    img {
      max-width: 75%;
      cursor: pointer;
      margin: 0 auto;
      border: 7px solid rgba(var(--grey-yoda), 0.75);
      border-radius: 50%;

      @media (min-width: var(--breakpoint-s)) {
        border: 4px solid hsla(0, 0%, 93%, 0.75);
        margin: 0 auto;
        border-radius: 10px;
        max-width: 100%;
      }
    }

    figcaption {
      margin: 5px auto;
      text-align: center;
      padding: 5px 0 10px 0;
      line-height: 1.5;
      font-size: var(--pixel13);

      &::first-line {
        font-weight: 600;
        font-size: var(--pixel15);
      }
    }
  }

  /* // Details Content Styles */
  /* // ---------------------- */

  .details__meta {
    @media (min-width: var(--breakpoint-s)) {
      order: 1;
    }

    dl {
      display: grid;
      grid-template-columns: auto 1fr;
      font-size: var(--pixel14);

      @media (min-width: var(--breakpoint-s)) {
        font-size: var(--pixel15);
      }

      > * {
        padding: 14px 0;
      }

      + a {
        margin-top: 20px;
      }
    }

    dt {
      padding-right: 15px;
      position: relative;
      font-weight: 600;

      @media (min-width: var(--breakpoint-s)) {
        padding-right: 30px;
        font-weight: 500;
      }

      &:after {
        content: ':';
        right: 0;
        position: absolute;
        color: var(--grey-kenobi);
      }
    }

    dd {
      border-bottom: 1px solid var(--grey-yoda);
      margin-left: 15px;

      @media (min-width: var(--breakpoint-s)) {
        margin-left: 30px;
      }
    }
  }

  /* // Details Aside Styles */
  /* // ---------------------- */

  @media (min-width: var(--breakpoint-s)) {
    .details__aside {
      order: 2;
    }
  }

  /* // Variant modifiers */
  /* // ---------------------- */

  .b-details--event figure {
    display: none;

    @media (min-width: var(--breakpoint-s)) {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 220px;
      background-color: var(--grey);
      border-radius: 10px;

      figcaption {
        font-size: var(--pixel54);
        font-weight: 600;
        line-height: 1;
        color: var(--grey-emperor);

        &::first-line {
          font-size: var(--pixel30);
          color: var(--red);
        }
      }
    }
  }

  .b-details--eventpast figure {
    border: 1px solid var(--red);
    background-color: var(--pink);

    figcaption {
      font-size: var(--pixel30);
      color: var(--black);
    }
  }
`;
