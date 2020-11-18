import styled from 'styled-components';
/**
 * @name FileUpload
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

interface FileUploadStylesProps {}

export const FileUploadStyles = styled.div<FileUploadStylesProps>`
  div::first-child {
    display: flex;
    max-width: 500px;
    border: 1px solid var(--grey-kenobi);
    border-radius: 4px;
    padding: 15px;
    background-color: white;
  }

  svg {
    width: 22px;
    height: 22px;
    fill: var(--black);
    margin-right: 12px;
  }

  input {
    display: flex;
    border: none;
    padding: 0;
  }
`;
