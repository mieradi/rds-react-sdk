import styled from 'styled-components';
import { greaterThan } from '@/components/cuMediaQueries';
type MastheadStylesProps = {
  isScrollingUp?: boolean;
};

export const MastheadStyles = styled.div<MastheadStylesProps>`
  border-top: 2px solid var(--red);
  border-bottom: 1px solid var(--grey-kenobi);
  height: calc(var(--masthead_height) + 3px);

  /* ul,
  & > ul,
  & ul > ul {
    height: var(--masthead_height);
  } */

  nav {
    width: 100%;
    margin-right: 50px;
  }

  .c-nav--topnav {
    width: 100%;

    nav {
      justify-content: flex-start !important;
      margin-left: 0 !important;
    }
  }

  display: ${({ isScrollingUp }) => (isScrollingUp ? 'flex' : 'none')};
  align-items: center;
  ul,
  & ul > ul {
    display: flex;
    align-items: center;

    li {
      height: var(--masthead_height);
      line-height: var(--masthead_height);
    }

    & a:focus,
    & button:focus {
      outline: 5px solid var(--link);
      position: relative;
    }

    /* All unordered lists  */
    ul {
      margin: 0;
      list-style-type: none;
    }

    /* All links and buttons  */
    a,
    button {
      display: block;
      position: relative;
      white-space: nowrap;
      align-items: center;
      padding-left: 15px;
      padding-right: 15px;
    }

    a,
    button,
    li {
      font-size: var(--pixel14);
      font-weight: 500;
      list-style: none;
      color: var(--black);
    }

    a:hover,
    button:hover,
    button[aria-expanded='true'] {
      background-color: var(--grey-yoda);
      color: var(--black);
    }

    /* Modifiers  */

    /* .c-menupopup > button {
      padding-right: 25px;

      &::after {
        right: 14px;
      }
    } */
  }

  h1 {
    height: var(--masthead_height);
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    white-space: nowrap;

    span {
      display: table;
    }
    ${greaterThan('s')`
        border-right: 1px solid var(--grey-yoda);
    `}
    a {
      display: flex;
      align-items: center;
      padding: 0 8px;
      font-size: 18px;

      &:hover {
        color: var(--red);
        background-color: transparent;
      }
      ${greaterThan('s')`
            font-size: 20px;
            padding: 0 15px;
    `}
    }

    svg {
      width: 40px;
      height: 40px;
      margin-top: -3px;
      margin-right: 5px;
      vertical-align: middle;
    }
  }
`;

/**
 * @name MastheadActionsStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

interface MastheadActionsStylesProps {
  CTAWhite?: boolean;
}

export const MastheadActionsStyles = styled.ul<MastheadActionsStylesProps>`
  justify-content: flex-end;
  margin-left: auto;

  li {
    border-left: 1px solid var(--grey-yoda);
    list-style: none;

    a,
    button {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }

  a {
    background-color: var(--red);
    color: white;
    svg {
      fill: white;
    }

    &:hover {
      background: var(--grey);
      color: black;

      svg {
        fill: black;
      }
    }
  }

  ${({ CTAWhite }) =>
    CTAWhite &&
    `
        a {
        background-color: white;
        color: var(--black);

        svg {
            fill: var(--black);
        }

        &:hover {
            background: var(--grey);
            color: black;

            svg {
            fill: black;
            }
        }
        }
    `}
`;
