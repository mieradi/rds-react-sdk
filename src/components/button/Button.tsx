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

interface IButtonProps extends IButton {
  handleClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  isSubmit?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<IButtonProps> = (props): JSX.Element => {
  const { icon, iconPosition, isSubmit, handleClick, title } = props;

  const iconHasRightAlignmentOrDefault =
    (icon && iconPosition === 'right') || (icon && !iconPosition);

  return (
    <ButtonStyles
      {...props}
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
