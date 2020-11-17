/**
 * @name Select
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
import React from 'react';
import { SelectStyles } from '@/components/forms/select/SelectStyles';

interface SelectProps {
  handleOnChange(event: React.FormEvent<HTMLDivElement>): void;
  multiple?: boolean;
  label?: String;
  description?: String;
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({
  handleOnChange,
  children,
  label,
  description,
  multiple,
}): JSX.Element => {
  return (
    <SelectStyles {...(handleOnChange && { onChange: handleOnChange })}>
      {label && <label htmlFor="select">{label}</label>}
      {description && <p className="form__description">{description}</p>}
      <select multiple={multiple} id="select" name="select">
        {children}
      </select>
    </SelectStyles>
  );
};
