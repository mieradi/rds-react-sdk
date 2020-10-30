/**
 * @name Button
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
import React from 'react';
import { ButtonStyles } from '../button/ButtonStyles';
// import { CUSTOMHOOK } from '@/customHooks/..';

interface ButtonProps {
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
}): JSX.Element => {
  const buttonProps = {
    icon,
    ghost,
    grey,
    full,
    center,
  };
  return (
    <ButtonStyles href={url} {...buttonProps}>
      {icon && icon}
      {title}
    </ButtonStyles>
  );
};
