import styled from 'styled-components';
import { UBlockStyles } from '../../uBlock/UBlockStyles';
import { AsideStyles } from '../../aside/AsideStyles';

export const MultiColumnAMStyles = styled.div`
  /**
 * Grid Global Styles
 */

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: var(--grid-gutter);
  padding: var(--block-padding-s);
  margin: 0 auto;

  /* @include media('>layout-s') {
    padding: va(--block-margin);
  } */

  /* Remove side padding on all u-block elements */

  ${UBlockStyles} {
    padding-left: 0;
    padding-right: 0;
  }

  /* Set max width on main content area */
  main {
    max-width: 760px;
    min-width: 0;
    /* Needed for responsive pre code blocks */

    /* Change grey block bg to white */

    .u-block--grey {
      background-color: white;
    }

    /* Remove padding if u-block is last element */
    .u-block--white:last-child {
      /* padding-bottom: 0; */
      padding-bottom: 20px;
    }

    /* Remove top spacing when white/grey blocks follow each other */
    .u-block--white + .u-block--grey,
    .u-block--grey + .u-block--white {
      padding-top: 0;
    }

    /* Pull up the first white u-block */
    & > .u-block--white {
      padding-top: 5px;
    }
  }

  /* .multicol__nav {
    display: none;

    @include media('>layout-s') {
      display: block;
    }
  } */

  ${AsideStyles} ${UBlockStyles}:first-child, ${AsideStyles} ${UBlockStyles}:first-of-type {
    padding-top: 0;
    @include media('>s') {
      ${UBlockStyles}:first-child {
        padding-top: 10px;
      }

      ${UBlockStyles}:first-of-type {
        padding-top: 10px;
      }
    }
  }

  /**
 * Grid Aside + Main Layout
 */

  .l-multicol--am {
    max-width: calc(1021px + #{var(--block-padding-s)} * 2);

    /* @include media('>layout-s') { */
    grid-template-columns: calc(200px + #{var(--layout-gutter)}) auto;
    max-width: calc(1021px + #{var(--block-margin)} * 2);

    /* Add padding and border to nav element */
    .multicol__nav {
      border-right: 1px solid var(--grey);
      padding-right: var(--grid-gutter);
    }
    /* } */
  }
`;
