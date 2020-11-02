import styled from 'styled-components';
import { greaterThan } from '../cuMediaQueries';

type UBlockStylesProps = {
  readonly backgroundColor?: string;
  readonly full?: boolean;
  readonly borderTop?: boolean;
  readonly masthead?: boolean;
  readonly panel?: boolean;
  readonly alert?: boolean;
};
export const UBlockStyles = styled.section<UBlockStylesProps>`
  padding: 30px 25px;

  /* handle large screen size */
  ${greaterThan('s')`padding: 40px 30px;`}

  background-color: ${({ backgroundColor }) =>
    backgroundColor ? `var(--${backgroundColor})` : 'white'};

  color: ${({ backgroundColor }) =>
    backgroundColor === 'black' ? 'white' : 'inherit'};

  /* handle masthead prop */
  ${({ masthead }) =>
    masthead &&
    `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    background-color: white;

  `}

  /* if full prop exists */
  ${({ full }) =>
    full &&
    `
      padding: 0 !important;

    > * {
      max-width: none;
    }
  `}
  /* if borderTop prop exists */
  ${({ borderTop }) =>
    borderTop &&
    `border-top: 1px solid var(--grey-vader);
    u-block--white {
    background-color: white;
    `}

/* handle alert prop */
    ${({ alert }) =>
    alert &&
    `z-index: 1000;
    background-color: var(--pink);
    border-bottom: 4px solid var(--red);
    position: relative;
    `}
`;
