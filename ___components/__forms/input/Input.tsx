/**
 * @name Input
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
interface InputProps {
  handleOnChange(event: React.FormEvent<HTMLInputElement>): void;
  inputType: string;
  value: string;
  placeholder?: string;
  id?: string;
  name?: string;
  label?: string;
}

export const Input: React.FC<InputProps> = ({
  handleOnChange,
  inputType,
  placeholder,
  id,
  name,
  label,
  value,
}): JSX.Element => {
  const types = ['radio', 'checkbox']
  return (
    <>
      {label && !types.includes(inputType) && <label htmlFor={id}>{label}</label>}
      <input
        {...(handleOnChange && { onChange: handleOnChange })}
        id={id}
        type={inputType}
        name={name || inputType}
        placeholder={placeholder}
        value={value}
      />
      {label && types.includes(inputType) && <label htmlFor={id}>{label}</label>}
    </>
  );
};
