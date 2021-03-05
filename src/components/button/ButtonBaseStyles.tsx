/**
 * @name ButtonBaseStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import { css } from 'styled-components';

export interface IButtonBaseStyles {
  icon?: JSX.Element;
  ghost?: boolean;
  grey?: boolean;
  full?: boolean;
  center?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  iconPosition?: 'left' | 'right' | undefined;
}

export const ButtonBaseStyles = css<IButtonBaseStyles>`
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  padding: 0.85rem 1.35rem;
  font-size: var(--pixel16);
  line-height: 1.75;
  transition: background 200ms, box-shadow 200ms;
  color: white;
  box-shadow: 0 4px 9px rgba(black, 0.25);
  display: inline-flex;
  text-decoration: none;
  margin: 15px 15px 15px 0;
  overflow: hidden;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    background-color: var(--black);
    color: white;
  }

  /* handle ghost prop */
  ${({ ghost }) =>
    ghost &&
    css`
      background-color: white !important;
      color: var(--red) !important;
      border: 1px solid var(--red) !important;
      box-shadow: 0 4px 9px rgba(0, 0, 0, 0.05);

      &:hover,
      &:hover path {
        background-color: var(--red) !important;
        color: white !important;
        fill: white !important;
      }

      & path {
        fill: var(--red);
      }
    `}

  /* handle grey prop */
${({ grey }) =>
    grey &&
    css`
      background-color: var(--grey) !important;
      color: var(--black) !important;
      border: 1px solid var(--grey-yoda) !important;
      box-shadow: 0 4px 9px rgba(black, 0.05);

      &:hover,
      &:hover path {
        background-color: var(--black) !important;
        color: white !important;
        fill: white !important;
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
      /* margin: 0px !important; */
      width: 100%;
    `}

${({ icon }) =>
    icon &&
    css`
      svg {
        width: 15px;
        margin: 0 15px;
        position: relative;
        top: 6px;
      }
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

      ${({ disabled }) =>
    disabled &&
    css`
      background-color: var(--grey) !important;
      color: var(--grey-anakin) !important;
      svg path {
        fill: var(--grey-anakin) !important;
      }

      &:hover {
        background-color: var(--grey);
        color: var(--grey-anakin);
        cursor: default;
      }
    `};
`;
