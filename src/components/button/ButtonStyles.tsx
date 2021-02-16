import styled, { css } from 'styled-components';

interface ButtonStylesProps {
  icon?: JSX.Element;
  ghost?: boolean;
  grey?: boolean;
  full?: boolean;
  center?: boolean;
  isLoading: boolean;
  disabled: boolean;
}

interface IButtonAttrs {
  isLoading: boolean;
  disabled: boolean;
}

export const ButtonStyles = styled.button.attrs((props: IButtonAttrs) => {
  return {
    'aria-disabled': props.disabled,
  };
})<ButtonStylesProps>`
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  padding: 0.85rem 1.35rem;
  font-size: var(--pixel16);
  line-height: 1.75;
  transition: background 200ms, box-shadow 200ms;
  background-color: var(--red);
  color: white;
  border-radius: 0.3rem;
  box-shadow: 0 4px 9px rgba(black, 0.25);
  display: inline-flex;
  text-decoration: none;
  margin: 0;
  overflow: hidden;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    background-color: var(--black);
    color: white;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: var(--grey);
      color: var(--grey-anakin);

      &:hover {
        background-color: var(--grey);
        color: var(--grey-anakin);
        cursor: default;
      }
    `};

  /* handle ghost prop */
  ${({ ghost }) =>
    ghost &&
    css`
      background-color: white;
      color: var(--red);
      border: 1px solid var(--red);
      box-shadow: 0 4px 9px rgba(0, 0, 0, 0.05);

      &:hover,
      &:hover path {
        background-color: var(--red);
        color: white;
        fill: white;
      }

      & path {
        fill: var(--red);
      }
    `}

  /* handle grey prop */
${({ grey }) =>
    grey &&
    css`
      background-color: var(--grey);
      color: var(--black) !important;
      border: 1px solid var(--grey-yoda);
      box-shadow: 0 4px 9px rgba(black, 0.05);

      &:hover,
      &:hover path {
        background-color: var(--black);
        color: white !important;
        fill: white;
      }

      & path {
        fill: var(--red);
      }
    `}




  /* handle center prop */
  ${({ center }) =>
    center &&
    css`
      display: block;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    `}


  /* handle full prop */
  ${({ full }) =>
    full &&
    css`
      width: 100%;
    `}

${({ icon }) =>
    icon &&
    css`
      svg path {
        fill: white;
      }

      &:hover svg path {
        fill: white;
      }
      svg {
        margin-right: 8px;
      }
    `}


  /* Full buttons in asides and smaller panels */
  /* TODO: PLACE IN FOOTER CSS */

  footer .c-buttoncta {
    display: block !important;
    margin: 0 !important;
    padding: 0.5rem 1.25rem;
    font-size: var(--pixel14);
  }
`;
