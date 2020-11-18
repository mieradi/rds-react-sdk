/**
 * @name CheckBox
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

//! needs to handle onChange
import React from 'react';
import { CheckBoxStyles } from './CheckBoxStyles';
import { FormDescription } from '@/components/_forms/description/FormDescription';
import { FormGroupStyles } from '@/components/_forms/group/FormGroupStyles';

interface CheckBoxProps {
  description?: String;
  legend?: String;
  isGroup?: boolean;
  children: React.ReactNode;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  children,
  description,
  legend,
  isGroup,
}): JSX.Element => {
  return (
    <CheckBoxStyles>
      <fieldset>
        {legend && <legend>{legend}</legend>}
        {description && <FormDescription description={description} />}
        {isGroup ? <FormGroupStyles>{children}</FormGroupStyles> : children}
      </fieldset>
    </CheckBoxStyles>
  );
};
