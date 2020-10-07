import styled from 'styled-components';

export const MultiColLayoutStyles = styled.div`
  /**
 * Grid Global Styles
 */

  display: grid;
  grid-template-columns: 1;
  grid-gap: var(--grid-gutter);
  padding: var(--block-padding-s);
  margin: 0 auto;

  @include media('>layout-s') {
    padding: va(--block-margin);
  }

  /* Remove side padding on all u-block elements */
  .u-block {
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

  .multicol__nav {
    display: none;

    @include media('>layout-s') {
      display: block;
    }
  }

  .multicol__sidebar {
    .u-block:first-child,
    .u-block:first-of-type {
      padding-top: 0;
    }

    @include media('>s') {
      .u-block:first-child {
        padding-top: 10px;
      }

      .u-block:first-of-type {
        padding-top: 10px;
      }
    }
  }

  /**
 * Grid Aside + Main Layout
 */

  .l-multicol--am {
    max-width: calc(1021px + #{var(--block-padding-s)} * 2);

    @include media('>layout-s') {
      grid-template-columns: calc(200px + #{var(--layout-gutter)}) auto;
      max-width: calc(1021px + #{var(--block-margin)} * 2);

      /* Add padding and border to nav element */
      .multicol__nav {
        border-right: 1px solid var(--grey);
        padding-right: var(--grid-gutter);
      }
    }
  }

  /**
 * Grid Main + Aside Layout
 */

  .l-multicol--ma {
    max-width: calc(1091px + #{var(--block-padding-s)} * 2);

    @include media('>layout-s') {
      grid-template-columns: auto calc(270px + #{var(--layout-gutter)});
      max-width: calc(1091px + #{var(--block-margin)} * 2);

      /* Add padding and border to sidebar element */
      .multicol__sidebar {
        border-left: 1px solid var(--grey);
        padding-left: var(--grid-gutter);
      }
    }

    /* Modifier to change element order when stacked */
    @include media('<=layout-s') {
      &.l-multicol--sidebar-top {
        main {
          order: 2;
        }

        .multicol__sidebar {
          order: 1;
        }
      }
    }
  }

  /**
 * Grid Aside + Main + Aside Layout
 */

  .l-multicol--ama {
    max-width: calc(1382px + #{var(--block-padding-s)} * 2);

    /* Add padding and border to nav element */
    .multicol__nav {
      border-right: 1px solid var(--grey);
      padding-right: var(--grid-gutter);
    }

    @include media('>layout-s', '<layout-l') {
      grid-template-columns: calc(200px + #{var(--layout-gutter)}) auto;
      max-width: calc(1382px + #{var(--block-margin)} * 2);

      /* Create grid template areas stacked layout */
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
    }

    @include media('>=layout-l') {
      grid-template-columns: calc(200px + #{var(--layout-gutter)}) auto calc(
          270px + #{var(--layout-gutter)}
        );

      /* Add padding and border to sidebar element */
      .multicol__sidebar {
        border-left: 1px solid var(--grey);
        padding-left: var(--grid-gutter);
      }
    }

    /* Modifier to change element template areas and order when stacked */
    &.l-multicol--sidebar-top {
      @include media('>layout-s', '<layout-l') {
        grid-template-areas:
          'nav sidebar'
          'nav main';
      }

      @include media('<=layout-s') {
        main {
          order: 2;
        }

        .multicol__sidebar {
          order: 1;
        }
      }
    }
  }

  /* CSS Grid IE11 Fallback */
  /* TODO: look into @support grid */
  @media screen and (-ms-high-contrast: active),
    screen and (-ms-high-contrast: none) {
    /**
    * Flexbox Global Styles
    */

    .l-multicol {
      display: flex;
      flex-wrap: wrap;

      .multicol__nav {
        flex: 0 0 calc(200px + #{var(--layout-gutter)});
        max-width: calc(200px + #{var(--layout-gutter)});
        width: calc(200px + #{var(--layout-gutter)});
      }

      main {
        flex: 0 0 100%;

        @include media('>layout-s') {
          flex: 1;
        }
      }

      .multicol__sidebar {
        flex: 0 0 100%;
        margin-top: var(--grid-gutter);
      }
    }

    /**
    * Flexbox Aside + Main Layout
    */

    @include media('>layout-s') {
      .l-multicol--am {
        .multicol__nav {
          margin-right: var(--grid-gutter);
        }
      }
    }

    /**
    * Flexbox Main + Aside Layout
    */

    @include media('>layout-s') {
      .l-multicol--ma {
        main {
          margin-right: var(--grid-gutter);
        }

        .multicol__sidebar {
          flex: 0 0 calc(270px + #{var(--layout-gutter)});
          width: calc(270px + #{var(--layout-gutter)});
          margin-top: 0;
        }
      }
    }

    @include media('<=layout-s') {
      .l-multicol--ma.l-multicol--sidebar-top {
        .multicol__sidebar {
          margin-top: 0;
          margin-bottom: var(--grid-gutter);
        }
      }
    }

    /**
    * Flexbox Aside + Main + Aside Layout
    */

    .l-multicol--ama {
      @include media('>layout-s') {
        main {
          margin-left: var(--grid-gutter);
        }

        .multicol__nav {
          flex: 0 0 calc(200px + #{var(--layout-gutter)});
          width: calc(200px + #{var(--layout-gutter)});
          max-width: calc(200px + #{var(--layout-gutter)});
        }
      }

      @include media('>layout-s', '<layout-l') {
        .multicol__sidebar {
          padding-left: calc(
            200px + #{var(--layout-gutter)} + #{var(--grid-gutter)}
          );
        }
      }

      @include media('>=layout-l') {
        main {
          margin-right: var(--grid-gutter);
        }

        .multicol__sidebar {
          flex: 0 0 calc(270px + #{var(--layout-gutter)});
          width: calc(270px + #{var(--layout-gutter)});
          margin-top: 0;
        }
      }
    }
  }

  /**
 * Styles from old layouts that haven't been used in new setup yet
 * =======================================
 */

  /* .l-multicol--white { */
  /* background-color: white; */

  /* .multicol__content > .u-block--white:first-child, */
  /* .multicol__sidebar > .u-block--white:first-child { */
  /* padding-top: 10px; */
  /* } */
  /* } */

  /* .l-multicol--grey { */
  /* background-color: $grey; */

  /* .u-block--grey { */
  /* padding-left: 0; */
  /* padding-right: 0; */
  /* } */

  /* .multicol__content > .u-block--grey:first-child { */
  /* padding-top: 10px; */
  /* } */
  /* } */

  /* .u-masthead-sticky .multicol__nav { */
  /* top: $masthead_height + 20px; */
  /* } */
`;
