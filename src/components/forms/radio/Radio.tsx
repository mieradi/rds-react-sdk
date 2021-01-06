/**
 * @name Radio
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

//! needs to handle onChange
import React from 'react';
import { RadioStyles } from '@/components/forms/radio/RadioStyles';
import { FormDescription } from '@/components/forms/description/FormDescription';
import { FormGroupStyles } from '@/components/forms/group/FormGroupStyles';

interface RadioProps {
  handleOnChange(event: React.FormEvent<HTMLFieldSetElement>):void;
  description?: String;
  legend?: String;
  isGroup?: boolean;
  children: React.ReactNode;
}

export const Radio: React.FC<RadioProps> = ({
  children,
  description,
  legend,
  isGroup,
  handleOnChange,
}): JSX.Element => {
  return (
    <RadioStyles>
      <fieldset {...(handleOnChange && { onChange: handleOnChange })}>
        {legend && <legend>{legend}</legend>}
        {description && <FormDescription description={description} />}
        {isGroup ? <FormGroupStyles>{children}</FormGroupStyles> : children}
      </fieldset>
    </RadioStyles>
  );
};
