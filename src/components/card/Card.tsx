import React from 'react';
import { CardStyles } from './CardStyles';

/**
 * @name CardInnerWrapperProps
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
interface CardInnerWrapperProps {
  children: React.ReactNode | JSX.Element;
  url?: string;
  noLink?: boolean;
}

const CardInnerWrapper: React.FC<CardInnerWrapperProps> = ({
  children,
  noLink,
  url,
}): JSX.Element => {
  if (noLink) return <>{children}</>;
  else {
    return (
      <a href={noLink ? '' : url} itemProp="url">
        {children}
      </a>
    );
  }
};

/**
 * @name Card
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
interface CardProps {
  title: string;
  url?: string;
  imgUrl?: string;
  alt?: string;
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
      video={video}
      imgUrl={imgUrl}
      noLink={noLink}
      itemScope
      itemType="http://schema.org/NewsArticle"
    >
      <CardInnerWrapper url={url} noLink={noLink}>
        <figure itemScope itemType="http://schema.org/ImageObject">
          {!figure && <img src={imgUrl} alt={alt} loading="lazy" />}
          {video && !figure && (
            <span aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M5.61 22.994h.001c-1.178.752-2.611.08-2.611-1.4v-1.197h.013V4.66H3V1.729C3 .251 4.433-.447 5.611.306l14.964 9.867c1.18.752 1.154 1.975-.011 2.714L5.61 22.996z" />
              </svg>
            </span>
          )}
          {figure && (
            <>
              <figcaption>U-Sports Titles</figcaption>
              <p itemProp="value">15</p>
            </>
          )}
        </figure>
        {!figure && (
          <header>
            {date && (
              <time dateTime={date} itemProp="datePublished">
                {date}
              </time>
            )}
            <h3 itemProp="headline">{title}</h3>
            {description && <p itemProp="description">{description}</p>}
          </header>
        )}
      </CardInnerWrapper>
    </CardStyles>
  );
};
