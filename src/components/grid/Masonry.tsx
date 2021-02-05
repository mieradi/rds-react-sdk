import styled from 'styled-components';
import { greaterThan } from '@components/cuMediaQueries';

export const Masonry = styled.div`
  ${greaterThan('s')`

      /* 2 col default */
      column-gap: 30px;
      column-count: 2;


    .l-masonry--col3 {
      column-count: 3;
      column-gap: 30px;
    }

    > {
      section,
      div {
        /* Masonry  elements */
        display: inline-block;
        width: 100%;
      }
    }


`}
`;
