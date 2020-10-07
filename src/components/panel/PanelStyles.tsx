import styled from 'styled-components';
/**
 * @name Panel
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

interface PanelStylesProps {
  size?: string | number;
}

export const PanelStyles = styled.div<PanelStylesProps>`
  position: relative;
  height: 100%;
  /* helps with equal vert height in listings */
  background-color: white;
  max-width: 768px;
  border-radius: 10px;
  box-shadow: 0 5px 8px 2px rgba(83, 83, 83, 0.2);

  h3 {
    font-size: var(--pixel16);
    margin: 0 0 5px;
    line-height: 1.25;
    border-bottom: 0;

    @include media('>s') {
      font-size: var(--pixel15);
    }
  }
  header {
    padding: 15px;
    border-radius: 10px 10px 0 0;
    /* @include media('>s') {
      padding: 25px 25px 50px;
    } */
  }
  .panel__header {
    background-color: var(--grey);
  }
`;
