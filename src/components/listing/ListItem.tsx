import React from 'react';
interface ListItemProps {
  heading: string;
  url?: string;
  description?: string;
  imageSrc?: string;
  icon?: JSX.Element;
  badge?: JSX.Element;
  date?: string;
}
export const ListItem: React.FC<ListItemProps> = ({
  heading,
  url,
  description,
  imageSrc,
  icon,
  badge,
  date,
}): JSX.Element => {
  return (
    <li itemProp="item">
      <a href={url} itemProp="url">
        {imageSrc && !icon && (
          <figure>
            <img src={imageSrc} itemProp="image" />
          </figure>
        )}
        {icon && !imageSrc && <figure>{icon}</figure>}
        <header itemProp="name">
          {date && (
            <time dateTime={date} itemProp="datePublished">
              {date}
            </time>
          )}
          <h3>{heading}</h3>
          {description && <p itemProp="description">{description}</p>}
        </header>
        {badge && <span>{badge}</span>}
      </a>
    </li>
  );
};
