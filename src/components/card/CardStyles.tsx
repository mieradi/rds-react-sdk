/**
 * @name CardStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';
import { greaterThan } from '@components/cuMediaQueries';

interface CardStylesProps {
  people?: boolean;
  figure?: boolean;
  video?: boolean;
  imgUrl?: string;
  noLink?: boolean;
  parentGridSize?: number;
}
export const CardStyles = styled.article<CardStylesProps>`
  position: relative;
  /* helps with equal vert height in listings */
  background-color: white;
  max-width: 768px;
  border-radius: 10px;
  height: 100%;
  ${({ noLink }) =>
    !noLink &&
    `
    &:hover h3 {
    color: var(--red);
  }
`}

  &:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 1px;
    left: 15px;
    bottom: 15px;
    margin-top: 20px;
    background: var(--red);
    ${greaterThan('s')`
      left: 25px;
      bottom: 20px;
    `}
  }

  /* to use if we ever use a card without an image */
  ${({ imgUrl }) => !imgUrl && `max-width: 384px;`}

  /* link wrapped around entire card */
  a {
    display: block;
    color: var(--black) !important;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    ${({ noLink }) =>
      !noLink &&
      `
    box-shadow: 0 5px 8px 2px rgba(83, 83, 83, 0.1);
    &:hover {
      text-decoration: none;
      box-shadow: 0 5px 8px 2px rgba(83, 83, 83, 0.2);
    }
`}
  }

  img {
    width: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    margin-bottom: 0 !important;
  }

  header {
    min-height: 130px;
    padding: 15px 15px 40px 15px;

    @include media('>s') {
      padding: 25px 25px 50px;
    }
  }

  time {
    display: block;
    margin-bottom: 6px;
    font-size: var(--pixel14);
    font-weight: 400;
    line-height: 1.25;
    color: var(--grey-vader);
  }

  /* Card heading */
  h3 {
    font-size: var(--pixel16);
    margin: 0 0 5px;
    line-height: 1.25;
    border-bottom: 0;

    ${greaterThan('s')`
      font-size: var(--pixel15);
    `}
  }

  /* Card description */
  p {
    font-size: var(--pixel14);
    font-weight: 300;
    line-height: 1.4;
  }

  /* End c-card component */

  /* increase drop shadow on white bgs */
  ${({ noLink }) =>
    !noLink &&
    `
    a {
    box-shadow: 0 5px 8px 2px rgba(83, 83, 83, 0.1);

    &:hover {
      box-shadow: 0 5px 8px 2px rgba(83, 83, 83, 0.2);
    }
  }
`}

  /* Bigger title when in 3 col grid */
  ${({ parentGridSize }) =>
    parentGridSize === 3 &&
    `
    ${greaterThan('s')`
        h3 {
          font-size: var(--pixel18);
        }
    `}
  `}

  /* Less padding in 4 col grid */
  ${({ parentGridSize }) =>
    parentGridSize === 4 &&
    `header {
    padding: 20px 20px 40px 20px;
    &:after {
        left: 20px;
        width: 20px;
  }`}


  /* Video variant */
  /* ============== */
  ${({ video }) =>
    video &&
    `figure {
        position: relative;

        span {
            font-size: 65px;
            position: absolute;
            top: calc(50% - 32px);
            /* determine center by subtracting half the height of the icon */
            left: calc(50% - 32px);
            /* and again */
            width: 50px;
            height: 50px;
            fill: white;
            &::before {
			    background-color: rgba(191, 17, 43, 0.65);
		    }
        }
  }`}

  /* People variant */
  /* =============== */
    ${({ people }) =>
    people &&
    `
    text-align: center;
    border-top: 1px solid $grey;

    &:after {
      left: calc(50% - 12.5px) !important;
    }
  }
    figure {
    padding-top: 20px;

    img {
      border-radius: 50%;
      border: 5px solid rgba($grey-yoda, 0.75);
      margin: 0 auto;
      max-width: 55%;
    }
    `}

${({ figure }) =>
    figure &&
    `
    text-align: center;

    a {
      display: flex;
      justify-content: center;
      flex-direction: column;
      border: 1px solid var(--grey-yoda);
      border-radius: 6px;
    }

    a > figure {
      border: none;
    }

    figure {
      padding: 40px;
      border: 1px solid var(--grey-kenobi);
      border-radius: 6px;
    }

    figcaption {
      color: var(--grey-vader);
      margin-bottom: 15px;
    }

    p {
      font-size: var(--pixel54);
      font-weight: 700;
      line-height: 0.8;
    }

    &:after {
      display: none;
    }

  `}
`;
