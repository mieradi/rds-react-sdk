/**
 * @name CheckBoxStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';

// RadioStyles extends this declaration
export const CheckBoxStyles = styled.div`
  label {
    position: relative;
    display: flex;
    align-items: center;
    font-weight: 400;
    padding-left: 30px;
    height: 20px;
  }

  /* Added to new inputs and active states */
  label::before,
  label::after {
    position: absolute;
    content: '';
    display: inline-block;
  }

  /* Create new inputs */
  label::before {
    left: 0;
    height: 20px;
    width: 20px;
    background: white;
    border: 1px solid var(--grey-luke);
  }

  /* Hide default inputs */
  input[type='checkbox'],
  input[type='radio'] {
    opacity: 0;
  }

  /* Remove content for inactive states */
  input[type='checkbox'] + label::after,
  input[type='radio'] + label::after {
    content: none;
  }

  /* Add empty content for active states */
  input[type='checkbox']:checked + label::after,
  input[type='radio']:checked + label::after {
    content: '';
  }

  /* Add focus on new inputs for a11y */
  input[type='checkbox']:focus + label::before,
  input[type='radio']:focus + label::before {
    outline: auto 2px Highlight;
    outline: auto 5px -webkit-focus-ring-color;
  }

  label::after {
    top: 3px;
    left: 7px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  input[type='checkbox']:checked + label::before {
    background: var(--red);
    border-color: var(--red);
  }
`;
