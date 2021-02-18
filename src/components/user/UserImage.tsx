/**
 * @name UserImage
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { UserImageStyles } from '@components/user/UserImageStyles';
import { IUserImage } from '../../types/user/IUserImage';

export const UserImage: React.FC<IUserImage> = ({
  imageUrl,
  alt,
  firstName,
  lastName,
  isProfile,
}): JSX.Element => {
  return (
    <UserImageStyles isProfile={isProfile}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={alt ? alt : `Photo of ${firstName} ${lastName}`}
        />
      ) : (
        <p>
          {firstName?.charAt(0)} {lastName?.charAt(0)}
        </p>
      )}
    </UserImageStyles>
  );
};
