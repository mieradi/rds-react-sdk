/**
 * @name GridStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
import styled from 'styled-components';
import { greaterThan } from '../cuMediaQueries';

interface GridStylesProps {
  largeGap?: boolean;
  col?: number;
}
export const GridStyles = styled.div<GridStylesProps>`
  display: grid;
  grid-gap: ${({ col }) => (col === 4 ? `24px` : `var(--grid-gutter);`)};
  grid-template-columns: repeat(2, 1fr);

  /* handle large gap prop */
  ${({ largeGap }) =>
    largeGap &&
    `grid-gap: 50px;
    ${greaterThan('l')`grid-gap: 80px;`}
    `}

  /* handle col prop */
  ${({ col }) =>
    `${greaterThan('s')`grid-template-columns: repeat(${col}, 1fr);`}
    `}
`;
