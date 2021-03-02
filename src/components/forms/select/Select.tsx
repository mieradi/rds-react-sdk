/**
 * @name Select
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { SelectStyles } from '@components/forms/select/SelectStyles';
import { FormError } from '../error/FormError';

import { IFormProps } from '../../../types/validation/IFormProps';

interface ISelect extends IFormProps {
  handleOnChange?: (event: React.FormEvent<HTMLSelectElement>) => void;
  multiple?: boolean;
  description?: String;
  children: React.ReactNode;
}

export const Select: React.FC<ISelect> = (props): JSX.Element => {
  const {
    disabled,
    handleOnChange,
    id,
    name,
    label,
    multiple,
    description,
    validationRules,
    errors,
    register,
    children,
    hasValidation,
  } = props;

  return (
    <>
      <SelectStyles>
        {label && <label htmlFor="select">{label}</label>}
        {description && <p className="form__description">{description}</p>}
        <select
          disabled={disabled}
          aria-disabled={disabled}
          {...(hasValidation && { ref: register(validationRules) })}
          {...(handleOnChange && { onChange: handleOnChange })}
          multiple={multiple}
          id={id}
          name={name}
        >
          {children}
        </select>
      </SelectStyles>
      {hasValidation && (
        <FormError
          errors={errors}
          validationRules={validationRules}
          name={name}
        />
      )}
    </>
  );
};
