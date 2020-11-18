/**
 * @name Radio
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

//! needs to handle onChange
import React from 'react';
import { RadioStyles } from '@/components/_forms/radio/RadioStyles';
import { FormDescription } from '@/components/_forms/description/FormDescription';
import { FormGroupStyles } from '@/components/_forms/group/FormGroupStyles';

interface RadioProps {
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
}): JSX.Element => {
  return (
    <RadioStyles>
      <fieldset>
        {legend && <legend>{legend}</legend>}
        {description && <FormDescription description={description} />}
        {isGroup ? <FormGroupStyles>{children}</FormGroupStyles> : children}
      </fieldset>
    </RadioStyles>
  );
};
