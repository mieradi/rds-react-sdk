/**
 * @name Details
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
import React from 'react';
import { DetailsStyles } from '@components/details/DetailsStyles';
import { UserImage } from '@components/user/UserImage';

interface DetailsProps {
  children: React.ReactNode;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  imageAlt?: string;
  caption?: {
    topText: string;
    bottomText?: string;
  };
}

export const Details: React.FC<DetailsProps> = ({
  children,
  imageUrl,
  imageAlt,
  firstName,
  lastName,
  caption,
}): JSX.Element => {
  return (
    <DetailsStyles>
      <div className={`b-details ${imageUrl && 'b-details--figure'}`}>
        {imageUrl ? (
          <div className="details__aside">
            <figure>
              <img
                src={imageUrl}
                alt={`Profile image of ${firstName + ' ' + lastName}`}
              />
              {caption && (
                <figcaption>
                  {caption && caption.topText}
                  <br />
                  {caption && caption.bottomText}
                </figcaption>
              )}
            </figure>
          </div>
        ) : (
          <UserImage
            isProfile
            firstName={firstName}
            lastName={lastName}
            imageUrl={imageUrl}
            alt={imageAlt}
          />
        )}
        <div className="details__meta">
          <dl className="u-link">{children}</dl>
        </div>
      </div>
    </DetailsStyles>
  );
};
