/**
 * @name SingleInput
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { FormDescription } from '@/components/__forms/description/FormDescription';
import { InputStyles } from '@/components/__forms/input/InputStyles';

interface SingleInputProps {
  handleOnChange(event: React.FormEvent<HTMLInputElement>): void;
  inputType: string;
  placeholder?: string;
  label?: string;
  description?: string;
}

export const SingleInput: React.FC<SingleInputProps> = ({
  handleOnChange,
  inputType,
  placeholder,
  label,
  description,
}): JSX.Element => {
  return (
    <InputStyles>
      {label && <label htmlFor="text">{label}</label>}
      {description && <FormDescription description={description} />}
      <input
        {...(handleOnChange && { onChange: handleOnChange })}
        id={inputType}
        type={inputType}
        name={inputType}
        placeholder={placeholder}
      />
    </InputStyles>
  );
};
