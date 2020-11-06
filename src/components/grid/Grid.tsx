/**
 * @name GridStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
import styled from 'styled-components';
import { greaterThan } from '../cuMediaQueries';

interface GridProps {
  largeGap?: boolean;
  size?: number;
}
export const Grid = styled.div<GridProps>`
  display: grid;
  grid-gap: ${({ size }) => (size === 4 ? `24px` : `var(--grid-gutter);`)};
  grid-template-columns: repeat(2, 1fr);

  /* handle large gap prop */
  ${({ largeGap }) =>
    largeGap &&
    `grid-gap: 50px;
    ${greaterThan('l')`grid-gap: 80px;`}
    `}

  /* handle col prop */
  ${({ size }) =>
    `${greaterThan('s')`grid-template-columns: repeat(${size}, 1fr);`}
    `}
`;
