/**
 * @name Form
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React, { Children, cloneElement } from 'react';
import { UBlock } from '@components/UBlock/UBlock';
import { FormStyles } from '@components/forms/form/FormStyles';
import { useForm, ValidationMode } from 'react-hook-form';

interface IForm {
  children: React.ReactNode;
  handleOnSubmit: (e: React.FormEvent) => void;
  mode?: string;
  defaultValues?: Record<string, any>;
}
export const Form: React.FC<IForm> = ({
  children,
  handleOnSubmit,
  mode,
  defaultValues,
}): JSX.Element => {
  const { register, errors, handleSubmit, control, reset } = useForm({
    mode: mode ? (mode as keyof ValidationMode) : 'onBlur',
    defaultValues: defaultValues || {},
  });

  return (
    <UBlock>
      <FormStyles onSubmit={handleSubmit(handleOnSubmit)}>
        {Children.map(children, function (child: any) {
          return cloneElement(child, { control, errors, register, reset });
        })}
      </FormStyles>
    </UBlock>
  );
};
