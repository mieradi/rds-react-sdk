/**
 * @name Button
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
import React from 'react';
import { ButtonStyles } from '../button/ButtonStyles';

interface ButtonProps {
  handleClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  title: string;
  url?: string;
  icon?: JSX.Element;
  ghost?: boolean;
  grey?: boolean;
  full?: boolean;
  center?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  url,
  title,
  ghost,
  grey,
  full,
  center,
  handleClick,
}): JSX.Element => {
  const buttonProps = {
    icon,
    ghost,
    grey,
    full,
    center,
  };
  return (
    <ButtonStyles
      {...(!handleClick && url && { href: url })}
      {...buttonProps}
      {...(handleClick && !url && { onClick: handleClick })}
    >
      {icon && icon}
      {title}
    </ButtonStyles>
  );
};
