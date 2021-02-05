import styled from 'styled-components';
import { UBlock } from '@components/UBlock/UBlock';
import { greaterThan, between } from '@components/cuMediaQueries';

interface LayoutStylesProps {
  AM?: boolean;
  isIntranet?: boolean;
  MA?: boolean;
  AMA?: boolean;
}
export const LayoutStyles = styled.div<LayoutStylesProps>`
  /**
 * Grid Global Styles
 */

  display: grid;
  /* grid-template-columns: 1; */
  grid-gap: var(--grid-gutter);
  padding: var(--block-padding-s);
  margin: 0 auto;

  /* Remove side padding on all u-block elements */
  ${UBlock} {
    padding-left: 0;
    padding-right: 0;
  }

  /* Set max width on main content area */
  main {
    max-width: 760px;
    min-width: 0;
    /* Needed for responsive pre code blocks */

    /* // Remove padding if u-block is last element */
    .u-block--white:last-child {
      /* // padding-bottom: 0; */
      padding-bottom: 20px;
    }

    /* // Remove top spacing when white/grey blocks follow each other */
    .u-block--white + .u-block--grey,
    .u-block--grey + .u-block--white {
      padding-top: 0;
    }

    /* // Pull up the first white u-block */
    & > .u-block--white {
      padding-top: 5px;
    }
  }

  .multicol__nav {
    display: none;
    ${greaterThan('ls')`
        display: block;
    `}
  }

  .multicol__sidebar {
    ${UBlock} {
      &:first-child,
      &:first-of-type {
        padding-top: 0;
        ${greaterThan('s')`
         padding-top: 10px;
        `}
      }
    }
  }

  /**
 * Grid Aside + Main Layout
 */

  ${({ AM }) =>
    AM &&
    `max-width: calc(1021px + var(--block-padding-s) * 2);
     grid-template-columns: calc(200px + var(--layout-gutter)) auto;

    ${greaterThan('s')`
        grid-template-columns: calc(200px + var(--layout-gutter)) auto;

        /* Add padding and border to nav element */
        .multicol__nav {
            border-right: 1px solid var(--grey);
            padding-right: var(--grid-gutter);
        }
    `}
   `}

  /* modifier for Intranet layout */

    ${({ isIntranet }) =>
    isIntranet &&
    greaterThan('ls')`
        .multicol__nav {
            border-right: none;
            padding-right: 0;
        }
    `}


  /**
 * Grid Main + Aside Layout
 */
    ${({ MA }) =>
    MA &&
    `
        max-width: calc(1091px + var(--block-padding-s) * 2);

        ${greaterThan('ls')`
            grid-template-columns: auto calc(270px + var(--layout-gutter));
            max-width: calc(1091px + var(--block-margin) * 2);

            /* Add padding and border to sidebar element */
            .multicol__sidebar {
                border-left: 1px solid var(--grey);
                padding-left: var(--grid-gutter);
            }
        `}

        /* Modifier to change element order when stacked */

        ${greaterThan('ls')`
            &.l-multicol--sidebar-top {
            main {
                order: 2;
            }

            .multicol__sidebar {
                order: 1;
            }
        }
    `}
`}



  /**
 * Grid Aside + Main + Aside Layout
 */
  ${({ AMA }) =>
    AMA &&
    `
    max-width: calc(1382px + var(--block-padding-s) * 2);

    /* Add padding and border to nav element */
    .multicol__nav {
      border-right: 1px solid var(--grey);
      padding-right: var(--grid-gutter);
    }
    ${between('ls', 'll')`
     grid-template-columns: calc(200px + var(--layout-gutter)) auto;
      max-width: calc(1382px + var(--block-margin) * 2);

      /*Create grid template areas stacked layout */
      grid-template-areas:
        'nav main'
        'nav sidebar';

      .multicol__nav {
        grid-area: nav;
      }

      main {
        grid-area: main;
      }

      .multicol__sidebar {
        grid-area: sidebar;
      }
    `}

    ${greaterThan('ll')`
        grid-template-columns: calc(200px + var(--layout-gutter)) auto calc(
            270px + var(--layout-gutter)
        );

        /* // Add padding and border to sidebar element */
        .multicol__sidebar {
        border-left: 1px solid var(--grey);
        padding-left: var(--grid-gutter);
        }
    `}

`}
`;
