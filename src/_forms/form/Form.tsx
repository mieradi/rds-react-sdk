/**
 * @name Form
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
import React from 'react';
import { UBlock } from '@/components/UBlock/UBlock';
import { FormStyles } from 'src/_forms/form/FormStyles';

interface FormProps {
  children: React.ReactNode;
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
}

export const Form: React.FC<FormProps> = ({
  children,
  handleSubmit,
}): JSX.Element => {
  return (
    <UBlock>
      <FormStyles {...(handleSubmit && { onSubmit: handleSubmit })}>
        {children}
      </FormStyles>
    </UBlock>
  );
};
