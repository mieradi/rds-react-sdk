import styled from 'styled-components';
import { PanelStyles } from '../panel/PanelStyles';
import { ButtonStyles } from '../button/ButtonStyles';
import { DetailsStyles } from '../details/DetailsStyles';
import { greaterThan } from '../cuMediaQueries';
interface AsideStylesProps {
  readonly hasSubmenu?: boolean;
  readonly isSubmenu?: boolean;
}
export const AsideStyles = styled.aside<AsideStylesProps>`
  /*  */
  /* Nav Menu Styles */
  /* ------------------------ */

  h2 {
    background-color: var(--grey);
    padding: 10px;
    color: var(--grey-vader);
    margin: 0;
    font-size: var(--pixel12);
    text-transform: uppercase;

    ${greaterThan('s')`
        background-color: white;
        border-bottom: 1px solid $grey;
        display: block;
        `}
  }

  ul {
    margin: 0;
    list-style-type: none;
  }

  /* Target direct descendants */
  & > ul {
    & > li {
      border-bottom: 1px solid var(--grey);
    }

    /* Gradient and padding for top most level expanded nav */
    & > .has-submenu.open {
      box-shadow: inset 0 -11px 12px -12px var(--grey-yoda);
      border: none;
      padding-bottom: 5px;
    }
  }

  /* TODO temp removal for incompatibility with aside people listing. needs review */
  /* li:not(.nav__expand) {
    position: relative;

    a {
      display: block;
      font-size: 16px;
      padding: 12px 10px;
      line-height: 1.4;

      &:hover {
        color: var(--red);
      }
    }

    button {
      position: absolute;
      top: 3px;
      right: -15px;
      height: 40px;
      width: 40px;
      font-size: 18px;
      color: var(--grey-luke);
      transition: transform 0.25s ease;
    }
  } */

  /* button:not(.nav__menu--top button):not(.nav__expand button) { */
  /* position: absolute; */
  /* top: 5px; */
  /* right: -10px; */
  /* height: 40px; */
  /* width: 40px; */
  /* font-size: 18px; */
  /* color: $grey-luke; */
  /* transition: transform 0.25s ease; */
  /* } */

  .nav__expand {
    display: none;
  }

  ${greaterThan('s')`

      display: block;
      border-bottom: none;

      button {
        display: flex;
        align-items: center;
        font-size: $pixel14;
        color: $grey-vader;
        padding: 8px 10px;
      }

      svg {
        width: 8px;
        height: 8px;
        fill: $grey-vader;
        margin-right: 5px;
      }
    }
`}

  .nav__expand--open {
    svg {
      transform: rotate(45deg);
      transition: transform 0.25s ease;
    }
  }

  /* Child nav */
  .is-submenu {
    button {
      top: -1px !important;
    }

    li a {
      font-size: 15px;
      color: var(--grey-emperor);
      padding-top: 8px;
      /* padding-left: 25px; */
    }

    /* Third level */
    .is-submenu {
      padding-left: 20px;
    }
  }

  /* Set transitions for child navs */
  .has-submenu {
    /* Hide child navs by default */
    & > ul {
      max-height: 0;
      overflow: hidden;
    }

    /* Show the child nav when expanded */
    &.open > ul {
      max-height: 1000px;
      transition: max-height 0.5s ease-in-out;
    }

    /* Rotate the open / close button */
    &.open {
      & > button {
        transform: rotate(45deg);
        transition: transform 0.25s ease;
      }
    }
  }
  /* } */

  /* Styles needed for altering masthead nav in modal */

  dialog {
    .nav__menu--top {
      li {
        margin: 0;
        list-style-type: none;

        a {
          display: block;
          color: var(--grey-emperor);
          padding: 10px 15px;
        }

        ul {
          margin: 0;

          ul li:first-child a {
            padding-top: 5px;
          }
        }
      }

      > li {
        border-bottom: 1px solid var(--grey);
      }

      > .has-submenu.open {
        box-shadow: none !important;
        /* border-bottom: 1px solid var(--grey) !important; */
        padding-bottom: 0 !important;
      }

      .nav--menubar__button {
        transform: none !important;
        position: relative;
        top: auto;
        right: auto;
        height: auto;
        width: 100%;
        font-size: 16px;
        background-color: var(--grey);
        padding: 10px 15px;
        color: #767676;
        margin: 0;
        font-size: var(--pixel12);
        text-transform: uppercase;
        text-align: left;
        cursor: default;

        & + ul ul {
          padding-left: 25px !important;

          .popup__sep {
            border: none;
          }
        }
      }
    }
  }

  ${PanelStyles} {
    padding: 14px !important;

    > header > h2 {
      padding: 0;
      margin-bottom: 12px;
    }

    footer {
      padding: 10px 20px 0 20px;
    }
  }

  ${ButtonStyles} {
    display: block !important;
    margin: 0 !important;
    padding: 0.5rem 1.25rem;
    font-size: var(--pixel14);
  }

  ${DetailsStyles} {
    display: block;
    div.b-details--figure {
      ${greaterThan('s')`
          grid-template-columns: unset;
      `}
    }

    figure:after {
      content: '';
      position: absolute;
      width: 25px;
      height: 1px;
      left: calc(50% - 10px);
      bottom: -10px;
      background: var(--red);
    }

    img {
      max-width: 75%;
      margin: 0 auto;
      border: 7px solid rgba(var(--grey-yoda), 0.75);
      border-radius: 50%;
    }

    .details__meta {
      overflow: hidden;

      dl {
        display: grid;
        grid-template-columns: auto 1fr;
        font-size: var(--pixel12);

        > * {
          padding: 10px 0;
        }

        + a {
          margin-top: 20px;
        }
      }

      dt {
        padding-right: 10px;
        position: relative;
        font-weight: 600;

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
      }
    }
  }
`;
