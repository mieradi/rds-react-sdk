/**
 * @name Radio
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React, { Children, cloneElement } from 'react';
import { RadioStyles } from '@components/forms/radio/RadioStyles';
import { IReactHookFormProps } from '../../../types/validation/IReactHookFormProps';

interface RadioProps extends IReactHookFormProps {
  description?: String;
  legend?: String;
  isGroup?: boolean;
  children: React.ReactNode;
}

export const Radio: React.FC<RadioProps> = (props): JSX.Element => {
  const { children, description, legend, register, errors, control } = props;

  return (
    <RadioStyles>
      <fieldset>
        {legend && <legend>{legend}</legend>}
        {description && <p>{description}</p>}
        {Children.map(children, function (child: any) {
          return cloneElement(child, { register, errors, control });
        })}
      </fieldset>
    </RadioStyles>
  );
};
