/**
 * @name CheckBox
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React, { Children, cloneElement } from 'react';
import { CheckBoxStyles } from '@components/forms/checkbox/CheckBoxStyles';
import { IReactHookFormProps } from '../../../types/validation/IReactHookFormProps';

interface CheckBoxProps extends IReactHookFormProps {
  description?: String;
  legend?: String;
  isGroup?: boolean;
  children: React.ReactNode;
}

export const CheckBox: React.FC<CheckBoxProps> = (props): JSX.Element => {
  const {
    children,
    description,
    legend,
    register,
    errors,
    control,
    isGroup,
  } = props;

  const content = (
    <>
      {legend && <legend>{legend}</legend>}
      {description && <p>{description}</p>}
      {Children.map(children, function (child: any) {
        return cloneElement(child, { register, errors, control });
      })}
    </>
  );

  return (
    <CheckBoxStyles isGroup={isGroup}>
      {isGroup ? <fieldset>{content}</fieldset> : content}
    </CheckBoxStyles>
  );
};
