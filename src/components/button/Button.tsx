/**
 * @name Button
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { ButtonStyles } from '@/components/button/ButtonStyles';

export interface ButtonProps {
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
  isSubmit?: boolean;
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
  isSubmit,
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
      type={isSubmit ? 'submit' : 'text'}
      className={isSubmit ? 'form__submit' : ''}
      {...(!handleClick && url && { href: url })}
      {...buttonProps}
      {...(handleClick && !url && { onClick: handleClick })}
    >
      {icon && icon}
      {title}
    </ButtonStyles>
  );
};
