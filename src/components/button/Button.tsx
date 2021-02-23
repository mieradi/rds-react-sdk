/**
 * @name Button
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { ButtonStyles } from '@components/button/ButtonStyles';
import { handleThrowError } from '@utils/handleThrowError';
import { IButton } from '../../types/button/IButton';

export const Button: React.FC<IButton> = ({
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
  backgroundColor,
  iconPosition,
}): JSX.Element => {
  const buttonProps = {
    icon,
    ghost,
    grey,
    full,
    center,
    disabled,
    isLoading,
    backgroundColor,
    iconPosition,
  };

  const iconHasRightAlignmentOrDefault =
    (icon && iconPosition === 'right') || (icon && !iconPosition);

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
      {icon && iconPosition === 'left' && icon}
      {title}
      {iconHasRightAlignmentOrDefault && icon}
    </ButtonStyles>
  );
};
