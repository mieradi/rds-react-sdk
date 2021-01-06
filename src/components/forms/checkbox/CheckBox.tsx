/**
 * @name CheckBox
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { CheckBoxStyles } from '@/components/forms/checkbox/CheckBoxStyles';
import { FormDescription } from '@/components/forms/description/FormDescription';
import { FormGroupStyles } from '@/components/forms/group/FormGroupStyles';

interface CheckBoxProps {
  handleOnChange(event: React.FormEvent<HTMLFieldSetElement>):void;
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
  handleOnChange,
}): JSX.Element => {
  return (
    <CheckBoxStyles>
      <fieldset {...(handleOnChange && { onChange: handleOnChange })}>
        {legend && <legend>{legend}</legend>}
        {description && <FormDescription description={description} />}
        {isGroup ? <FormGroupStyles>{children}</FormGroupStyles> : children}
      </fieldset>
    </CheckBoxStyles>
  );
};
