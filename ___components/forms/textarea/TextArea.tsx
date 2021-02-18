/**
 * @name TextArea
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { TextAreaStyles } from '@/components/forms/textarea/TextAreaStyles';
import { FormDescription } from '@/components/forms/_DEPRECATED_description/FormDescription';
import { IFormProps } from 'types/validation/IFormProps';
import { FormError } from '../error/FormError';
import { handleHasError } from 'src/__helpers/handleHasError';

interface TextAreaProps extends IFormProps {
  handleOnChange(event: React.FormEvent<HTMLTextAreaElement>): void;
  rows?: number;
  label?: string;
  description?: string;
  placeholder?: string;
}

export const TextArea: React.FC<TextAreaProps> = (props): JSX.Element => {
  const {
    handleOnChange,
    description,
    label,
    placeholder,
    rows,
    value,
    register,
    errors,
    hasValidation,
    validationRules,
    name,
    id,
  } = props;

  return (
    <>
      <TextAreaStyles hasError={handleHasError(errors, name)}>
        {label && <label htmlFor="textarea">{label}</label>}
        {description && <FormDescription description={description} />}
        <textarea
          {...(handleOnChange && { onChange: handleOnChange })}
          id={id}
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={value}
          {...(hasValidation && { ref: register(validationRules) })}
        />
      </TextAreaStyles>
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
