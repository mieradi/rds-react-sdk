import styled from 'styled-components';
import { greaterThan } from '@components/cuMediaQueries';
import { ButtonStyles } from '@components/button/ButtonStyles';

interface ListingStylesProps {
  accordion?: boolean;
  news?: boolean;
  event?: boolean;
  people?: boolean;
  icon?: boolean;
  video?: boolean;
  noLink?: boolean;
  noHover?: boolean;
}
export const ListingStyles = styled.div<ListingStylesProps>`
  /**
 * Listing Block
 * =============
 */

  + ${ButtonStyles} {
    margin-top: var(--block-padding-m);
  }

  ul {
    list-style-type: none;
    margin: 0;
    //border-top: 1px solid var(--grey-yoda);
    border-bottom: 1px solid var(--grey-yoda);
    li a {
      cursor: default;
    }
    & > li {
      position: relative;

      &:not(:last-child) {
        border-bottom: 1px solid var(--grey-yoda);
      }
    }
  }

  ${({ noLink }) =>
    !noLink &&
    `
    li a {
        cursor: pointer !important;
    }
    li{
        background-size: 12px;
        background-position: right 15px center;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Cpath fill='none' stroke='%23535353' stroke-linecap='round' stroke-linejoin='round' stroke-width='18' d='M37 118l54-54-54-54'/%3E%3C/svg%3E");

    }
    `};

  ${({ accordion }) =>
    !accordion &&
    `
    a {
      display: flex;
      align-items: center;
      min-height: 60px;
      padding: 10px 50px 10px 0;


      h3,
      h4 {
        color: var(--link);
      }
    }

    }


    header {
      flex: 1;
      min-width: 0;
      /* this allows text to be truncated inside a flex item */
    }

    h3,
    h4 {
      font-size: var(--pixel16);
      line-height: 1.4em;
      margin: 3px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    p {
      font-size: var(--pixel14);
      font-weight: 300;
      word-wrap: break-word;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    figure {
      margin-right: 15px;
      width: 15%;
      min-width: 70px;


      ${greaterThan('s')`
          /* margin-right: 25px; */
          width: 10%;
          `}

      svg {
        width: 45px;
        height: 45px;
        /* height: auto; */
        margin-right: 15px;
      }
    }

    .c-badge {
      position: absolute;
      right: 5px;
    }
}
`}

  ${({ noHover }) =>
    !noHover &&
    `li:hover {
        a {
            cursor: pointer;
        }
        background-color: var(--grey);
        h3,
        h4 {
            color: var(--red);
        }
        }
    `}

  /* End .b-listing */

   /* News variant */
  /* ============= */

  ${({ news }) =>
    news &&
    `
    figure {
        width: 30%;

    ${greaterThan('s')`
        margin-right: 30px;
        width: 30%;
        `}
      }
   time {
    font-size: var(--pixel14);
    font-weight: 400;
    color: var(--grey-vader);
  }

   h3 {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal !important;
    text-overflow: ellipsis;
    line-height: 1.5 !important;


    ${greaterThan('s')`
        font-size: var(--pixel20);
    `}

  `}

   /* Event variant */
  /* =============== */
  ${({ event }) =>
    event &&
    `
   time {
    margin-right: 20px;
    color: var(--red);
    text-align: center;
    text-transform: uppercase;
    font-size: var(--pixel12);
    line-height: 1.1;

    ${greaterThan('s')`
        margin-right: 30px;
    `}
  }

   time span {
    display: block;
    color: var(--black);
    font-size: var(--pixel24);
  }

   time + div {
    display: none;
    ${greaterThan('s')`
        display: flex;
        flex: 0 0 100px;
        flex-direction: column;
        justify-content: center;
    `}
}
`}

   /* People variant */
  /* =============== */
  ${({ people }) =>
    people &&
    `
  img {
    border: 4px solid hsla(0, 0%, 93%, 0.75);
    border-radius: 50%;
  }`}


   /* Icon variant */
  /* ============= */
  ${({ icon }) =>
    icon &&
    `
   figure {
    display: flex;
    min-width: auto;
    width: auto !important;
    margin-right: 0;
  }
`}

   /* Video variant */
  /* ============== */
  ${({ video }) =>
    video &&
    `
  figure {
    position: relative;
    background-color: black;

    img {
      opacity: 0.6;
    }
  }

  figure svg {
    position: absolute;
    top: calc(
      50% - 15px
    );
     /* calc is used to determine center by subtracting half the height of the icon */
    left: calc(
      50% - 15px
    );
    /* calc is used to determine center by subtracting half the width of the icon */
    width: 30px;
    height: 30px;
    fill: white;
  }`}

   /* Accordion Variant */
  /* =========== */
${({ accordion }) =>
    accordion &&
    `
   ul {
    border: none;
    margin-bottom: 25px;
  }

   figure {
    width: initial;
  }
`} /* Grey Block */
  /* =========== */

  /* .u-block--grey {
    .b-listing a:hover {
      background-color: var(--grey-yoda);
    }
  } */
`;
