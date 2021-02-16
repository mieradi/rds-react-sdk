/**
 * @name Button
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { ButtonStyles } from '@components/button/ButtonStyles';
import { handleThrowError } from '@utils/handleThrowError';

export interface ButtonProps {
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  isLoading: boolean;
  title: string;
  url?: string;
  icon?: JSX.Element;
  ghost?: boolean;
  grey?: boolean;
  full?: boolean;
  center?: boolean;
  isSubmit?: boolean;
  disabled: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  title,
  ghost,
  grey,
  full,
  center,
  handleClick,
  isLoading,
  isSubmit,
  disabled,
}): JSX.Element => {
  const buttonProps = {
    icon,
    ghost,
    grey,
    full,
    center,
    disabled,
    isLoading,
  };

  return (
    <ButtonStyles
      {...buttonProps}
      {...(!handleClick && isSubmit && { type: 'submit' })}
      {...(handleClick && !isSubmit && { onClick: handleClick })}
      {...(handleClick &&
        isSubmit && {
          onClick: () =>
            handleThrowError(
              'Button can not have both the isSubmit and handleClick prop together. Please choose only one.'
            ),
        })}
    >
      {icon && icon}
      {title}
    </ButtonStyles>
  );
};
