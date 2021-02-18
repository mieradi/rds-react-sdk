/**
 * @name UserImageStyles
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import styled from 'styled-components';

interface UserImageStylesProps {
  isProfile?: boolean;
}

export const UserImageStyles = styled.div<UserImageStylesProps>`
  background: var(--grey-yoda);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  width: ${({ isProfile }) => (isProfile ? '150px' : '50px')};
  height: ${({ isProfile }) => (isProfile ? '150px' : '50px')};
  margin: 0 auto;
  margin-right: ${({ isProfile }) => (isProfile ? 'inherit' : '15px')};
  p {
    font-size: ${({ isProfile }) => (isProfile ? '30px' : '15px')};
  }
`;
