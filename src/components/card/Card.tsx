import React from 'react';

import { CardStyles } from './CardStyles';

interface CardProps {
  title: string;
  url: string;
  imgUrl: string;
  alt: string;
  col?: number;
  description?: string;
  date?: string;
  video?: boolean;
  people?: boolean;
  figure?: boolean;
  noLink?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  url,
  imgUrl,
  alt,
  description,
  col,
  date,
  video,
  people,
  figure,
  noLink,
}): JSX.Element => {
  return (
    <CardStyles
      people={people}
      figure={figure}
      col={col}
      itemScope
      itemType="http://schema.org/NewsArticle"
    >
      <a href={noLink ? '' : url} itemProp="url">
        <figure itemScope itemType="http://schema.org/ImageObject">
          <img src={imgUrl} alt={alt} loading="lazy" />
          {video && (
            <span className="u-icon u-icon--circle" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M5.61 22.994h.001c-1.178.752-2.611.08-2.611-1.4v-1.197h.013V4.66H3V1.729C3 .251 4.433-.447 5.611.306l14.964 9.867c1.18.752 1.154 1.975-.011 2.714L5.61 22.996z" />
              </svg>
            </span>
          )}
        </figure>
        <header>
          {date && (
            <time dateTime="2018-03-11" itemProp="datePublished">
              Sunday, March 11th
            </time>
          )}
          <h3 itemProp="headline">{title}</h3>
          {description && (
            <p itemProp="description">
              The birds are surprisingly skilled at planning how to get food in
              the future.
            </p>
          )}
        </header>
      </a>
    </CardStyles>
  );
};
