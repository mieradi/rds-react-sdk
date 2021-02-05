/**
 * @name Input
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { FormError } from '../error/FormError';
import { IFormProps } from '../../../types/validation/IFormProps';
import { InputStyles } from './InputStyles';
import { handleHasError } from '@utils/handleHasError';

interface IInput extends IFormProps {
  handleOnChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  handleOnClick?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInput> = (props): JSX.Element => {
  const {
    handleOnChange,
    inputType,
    placeholder,
    id,
    name,
    label,
    value,
    validationRules,
    errors,
    register,
    isChecked,
    hasValidation,
    handleOnClick,
  } = props;
  const isSelectable = inputType === 'checkbox' || inputType === 'radio';

  return (
    <InputStyles hasError={handleHasError(errors, name)}>
      {label && !isSelectable && <label htmlFor={id}>{label}</label>}
      <input
        {...(handleOnChange && { onChange: handleOnChange })}
        {...(handleOnClick && { onClick: handleOnClick })}
        {...(isSelectable && { checked: isChecked })}
        {...(hasValidation && { ref: register(validationRules) })}
        type={inputType}
        name={name}
        placeholder={placeholder}
        value={value}
        id={id}
      />
      {label && isSelectable && <label htmlFor={id}>{label}</label>}
      {hasValidation && (
        <FormError
          errors={errors}
          validationRules={validationRules}
          name={name}
        />
      )}
    </InputStyles>
  );
};
