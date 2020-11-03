/**
 * @name Details
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { Button } from '../button/Button';
import { DetailsStyles } from './DetailsStyles';

interface DetailsProps {
  children: React.ReactNode;
  img?: { src: string; alt: string };
  caption?: {
    topText: string;
    bottomText?: string;
  };
  button?: { url: string; text: string };
}

export const Details: React.FC<DetailsProps> = ({
  children,
  img,
  caption,
  button,
}): JSX.Element => {
  return (
    <DetailsStyles>
      <div className={`b-details ${img && 'b-details--figure'}`}>
        {img && (
          <div className="details__aside">
            <figure>
              <img src={img.src} alt={img.alt} />
              {caption && (
                <figcaption>
                  {caption && caption.topText}
                  <br />
                  {caption && caption.bottomText}
                </figcaption>
              )}
            </figure>
          </div>
        )}
        <div className="details__meta">
          <dl className="u-link">{children}</dl>
        </div>
      </div>
      {button && (
        <footer>
          <Button title={button.text} url={button.url} grey center full />
        </footer>
      )}
    </DetailsStyles>
  );
};
