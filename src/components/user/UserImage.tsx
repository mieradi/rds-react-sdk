/**
 * @name UserImage
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { UserImageStyles } from '@components/user/UserImageStyles';

interface UserImageProps {
  imageUrl?: string;
  alt?: string;
  firstName?: string;
  lastName?: string;
  isProfile?: boolean;
}

export const UserImage: React.FC<UserImageProps> = ({
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
