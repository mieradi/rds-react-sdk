import styled from 'styled-components';
/**
 * @name SelectStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

interface SelectStylesProps {}

export const SelectStyles = styled.div<SelectStylesProps>`
  select {
    cursor: pointer;
    display: inline-block;
    appearance: none;
    width: 100%;
    max-width: 500px;
    font-size: var(--pixel16);
    padding: 15px;
    border: 1px solid var(--grey-kenobi);
    border-radius: 4px;
    background-color: white;
  }

  /* Add arrow to single item select lists */
  select:not([multiple]) {
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, var(--grey-kenobi), var(--grey-kenobi));
    background-position: calc(100% - 20px) calc(1em + 5px),
      calc(100% - 15px) calc(1em + 5px), calc(100% - 2.5em) 0;
    background-size: 5px 5px, 5px 5px, 1px 100%;
    background-repeat: no-repeat;
  }
`;
