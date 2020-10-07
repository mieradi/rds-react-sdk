import styled from 'styled-components';
/**
 * @name COMPONENTNAME
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

interface GridStylesProps {
  largeGap?: boolean;
  col?: number;
}
export const GridStyles = styled.div<GridStylesProps>`
  display: grid;
  grid-gap: var(--grid-gutter);
  grid-template-columns: repeat(2, 1fr);
  /* @include media('>s') {
    grid-template-columns: repeat(3, 1fr);
  } */

  ${({ largeGap }) =>
    largeGap &&
    `
    grid-gap: 50px;
    /* @include media('>=l') {
      grid-gap: 80px;
    }
    `}

  ${({ col }) =>
    col === 2 &&
    `
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 760px){
      grid-template-columns: repeat(3, 1fr);
  }



  `}
  ${({ col }) =>
    col === 3 &&
    `
		grid-template-columns: repeat(3, 1fr);
	`} /* ${({ col }) =>
    col === 4 &&
    `
   grid-gap: 24px;
   grid-template-columns: repeat(4, 1fr);
  `} */
  /* @include media('<=s') {
    .u-grid--s1 {
      grid-template-columns: repeat(1, 1fr);
    }
  } */
`;
