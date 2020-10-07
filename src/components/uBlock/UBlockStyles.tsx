import styled from 'styled-components';
type UBlockStylesProps = {
  readonly backgroundColor: string;
  readonly full?: boolean;
  readonly borderTop?: boolean;
  readonly masthead?: boolean;
};
export const UBlockStyles = styled.section<UBlockStylesProps>`
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

  padding: 30px 25px;

  @include media('>s') {
    padding: 40px 30px;
  }

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
    borderTop && `border-top: 1px solid var(--grey-vader);`}
    u-block--white {
    background-color: white;
  }
  ${({ backgroundColor }) =>
    backgroundColor &&
    `
        background-color: var(--${backgroundColor});
        ${backgroundColor === 'black' && `color: white;`}

        `}
  .u-block--${({ backgroundColor }) => backgroundColor} {
    background-color: var(${({ backgroundColor }) => backgroundColor});
    ${({ backgroundColor }) => backgroundColor === 'black' && `color: white;`}
  }

  .u-block--alert {
    z-index: 1000;
    background-color: var(--pink);
    border-bottom: 4px solid var(--red);
    position: relative;
  }
`;
