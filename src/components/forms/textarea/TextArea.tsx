/**
 * @name TextArea
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { TextAreaStyles } from '@components/forms/textarea/TextAreaStyles';
import { IFormProps } from '../../../types/validation/IFormProps';
import { FormError } from '../error/FormError';
import { handleHasError } from '@utils/handleHasError';

interface TextAreaProps extends IFormProps {
  handleOnChange(event: React.FormEvent<HTMLTextAreaElement>): void;
  rows?: number;
  label?: string;
  description?: string;
  placeholder?: string;
}

export const TextArea: React.FC<TextAreaProps> = (props): JSX.Element => {
  const {
    disabled,
    handleOnChange,
    description,
    label,
    placeholder,
    rows,
    value,
    register,
    errors,
    validationRules,
    name,
    id,
    readonly,
  } = props;

  return (
    <>
      <TextAreaStyles hasError={handleHasError(errors, name)}>
        {label && <label htmlFor="textarea">{label}</label>}
        {description && <p>{description}</p>}
        <textarea
          readOnly={readonly}
          disabled={disabled}
          aria-disabled={disabled}
          {...(handleOnChange && { onChange: handleOnChange })}
          id={id}
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={value}
          {...(validationRules && { ref: register(validationRules) })}
        />
      </TextAreaStyles>
      {validationRules && (
        <FormError
          errors={errors}
          validationRules={validationRules}
          name={name}
        />
      )}
    </>
  );
};
