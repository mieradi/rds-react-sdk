/**
 * @name ListItem
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { SVG } from '@icons/base/SVG';
interface ListItemProps {
  event?: boolean;
  video?: boolean;
  title: string;
  url?: string;
  description?: string;
  imageSrc?: string;
  icon?: JSX.Element;
  badge?: JSX.Element;
  date?: string;
  startTime?: string;
  endTime?: string;
  month?: string;
  day?: string;
  eventLocation?: string;
}
export const ListItem: React.FC<ListItemProps> = ({
  title,
  url,
  description,
  imageSrc,
  icon,
  badge,
  date,
  startTime,
  endTime,
  month,
  day,
  eventLocation,
  event,
  video,
}): JSX.Element => {
  return (
    <li itemProp="item">
      <a href={url} itemProp="url">
        {imageSrc && !icon && !event && (
          <figure>
            <img src={imageSrc} itemProp="image" />
            {video && (
              <SVG>
                <path d="M0 12c0-3.205 1.248-6.219 3.515-8.485A11.921 11.921 0 0 1 12 0c3.205 0 6.219 1.248 8.485 3.515A11.92 11.92 0 0 1 24 12a11.92 11.92 0 0 1-3.515 8.485A11.92 11.92 0 0 1 12 24a11.92 11.92 0 0 1-8.485-3.515A11.921 11.921 0 0 1 0 12zM12 1.1C5.99 1.1 1.1 5.99 1.1 12c0 6.01 4.89 10.9 10.9 10.9 6.01 0 10.9-4.89 10.9-10.9 0-6.01-4.89-10.9-10.9-10.9zm-1.98 15.919h.001c-.524.333-1.161.036-1.161-.619v-.53h.006V8.907H8.86V7.61c0-.654.637-.963 1.161-.63l6.653 4.366c.525.333.513.874-.005 1.201l-6.648 4.473z" />
              </SVG>
            )}
          </figure>
        )}
        {icon && !imageSrc && <figure>{icon}</figure>}
        {/* render only for events */}
        {event && (
          <>
            <time itemProp="startDate" dateTime="">
              {month}
              <span>{day}</span>
            </time>
            <div>
              <h3>{startTime}</h3>
              <p>{endTime}</p>
            </div>
            <div>
              <h3 itemProp="name">{title}</h3>
              <p itemProp="location">{eventLocation}</p>
            </div>
          </>
        )}
        {/* render for non events */}
        {!event && (
          <header itemProp="name">
            {date && (
              <time dateTime={date} itemProp="datePublished">
                {date}
              </time>
            )}
            <h3>{title}</h3>
            {description && <p itemProp="description">{description}</p>}
          </header>
        )}
        {badge && <span>{badge}</span>}
      </a>
    </li>
  );
};
