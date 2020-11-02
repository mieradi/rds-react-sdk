import React from 'react';
interface ListItemProps {
  heading: string;
  url: string;
  description?: string;
  imageSrc?: string;
  icon?: JSX.Element;
  badge?: string;
}
export const ListItem: React.FC<ListItemProps> = ({
  heading,
  url,
  description,
  imageSrc,
  icon,
  badge,
}): JSX.Element => {
  return (
    <li itemProp="item">
      <a href={url} itemProp="url">
        {imageSrc && icon && <p>You cannot add an image and an icon</p>}
        {imageSrc && !icon && (
          <figure>
            <img src={imageSrc} itemProp="image" />
          </figure>
        )}
        {icon && !imageSrc && <figure>{icon}</figure>}
        <header itemProp="name">
          <h3>{heading}</h3>
          {description && <p itemProp="description">{description}</p>}
        </header>
        {badge && <span className="c-badge">{badge}</span>}
      </a>
    </li>
  );
};
