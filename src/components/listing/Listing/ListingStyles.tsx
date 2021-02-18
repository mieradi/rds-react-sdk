import styled from 'styled-components';
/**
 * @name Panel
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

interface PanelStylesProps {
  size?: string | number;
  hasSubmenu: boolean;
}

export const PanelStyles = styled.section<PanelStylesProps>`
  position: relative;
  background-color: white;
  max-width: 768px;
  border-radius: 10px;
  box-shadow: var(--ds-y);
  padding: 20px !important;
  margin-bottom: 30px;

  > header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    position: relative;
    border-bottom: 1px solid var(--grey-yoda);
    /* margin-left: -20px;
    margin-right: -20px; */
    margin-bottom: 20px;
    padding: 0 20px;
    padding-bottom: 20px;

    h2 {
      font-size: var(--pixel16);
      border: none !important;
      margin-bottom: 0px;
      padding-bottom: 0px;
    }

    p {
      font-size: var(--pixel14);
      margin-bottom: 20px;
    }

    button {
      position: absolute;
      /* top: -8px; */
      right: 20px;
      svg {
        width: 20px;
      }
    }

    /* span {
      position: absolute;
      left: -9999px;
    } */
  }

  footer {
    border-top: 1px solid var(--grey-yoda);
    margin: 0 -20px;
    padding: 20px 20px 0 20px;
    display: flex;

    p {
      margin: 0;
    }

    a:not(.c-buttoncta) {
      color: var(--link);
      font-size: var(--pixel13);
      padding-right: 5px;

      + a {
        border-left: 1px solid green;
        padding-left: 10px;
      }

      &:hover {
        color: var(--red);
      }
    }

    a.c-buttoncta {
      flex: 1;
    }
  }

  > .b-listing > ul {
    border-top: none !important;
    border-bottom: none !important;
  }
`;
