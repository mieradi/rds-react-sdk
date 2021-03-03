/**
 * @name Form
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React, { Children, cloneElement } from 'react';
import { UBlock } from '@components/UBlock/UBlock';
import { FormStyles } from '@components/forms/form/FormStyles';
import { useForm } from 'react-hook-form';

interface IForm {
  children: React.ReactNode;
  handleOnSubmit: (e: React.FormEvent) => void;
}
export const Form: React.FC<IForm> = ({
  children,
  handleOnSubmit,
}): JSX.Element => {
  const { register, errors, handleSubmit, control, reset } = useForm({
    mode: 'onBlur',
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
