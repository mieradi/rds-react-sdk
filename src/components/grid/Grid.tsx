/**
 * @name Grid
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';
import { greaterThan } from '@/components/cuMediaQueries';

interface GridProps {
  largeGap?: boolean;
  size?: 2 | 3 | 4;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-gap: ${({ size }) => (size === 4 ? `24px` : `var(--grid-gutter);`)};
  grid-template-columns: ${({ size }) =>
    size ? `repeat(${size}, 1fr)` : `repeat(2, 1fr)`};
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
