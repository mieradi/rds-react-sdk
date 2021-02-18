import React from 'react';
import { FormErrorStyles } from '@/components/forms/error/FormErrorStyles';
import { IValidationRules } from 'types/validation/IValidationRules';
import { IFormError } from 'types/forms/IFormError';
import { IErrorType } from 'types/validation/IErrorType';

/**
 * @name FormErrorWrapper
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

export const FormErrorWrapper: React.FC<IFormError> = ({
  errorType,
  validationRules,
  message,
  name,
}): JSX.Element => {
  return (
    <FormErrorStyles>
      {message || handleDefaultErrorMessage(name, errorType, validationRules!)}
    </FormErrorStyles>
  );
};

function handleDefaultErrorMessage(
  name: string,
  errorType: IErrorType,
  validationRules: IValidationRules
): string {
  const type = errorType[name].type;

  const messages = {
    required: 'This field is required',
    maxLength: `This field can only be ${validationRules.maxLength} characters in length`,
    minLength: `This field must be at least ${validationRules.minLength} characters in length`,
    max: `Maximum value is ${validationRules.max}`,
    min: `Minimum value is ${validationRules.min}`,
  };

  return messages[type];
}
