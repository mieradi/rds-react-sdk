/**
 * @name FormError
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { IErrorType } from '../../../types/validation/IErrorType';
import { IValidationRules } from '../../../types/validation/IValidationRules';
import { FormErrorWrapper } from './FormErrorWrapper';

interface FormErrorProps {
  errors: IErrorType;
  validationRules?: IValidationRules;
  name: string;
}

export const FormError: React.FC<FormErrorProps> = ({
  errors,
  name,
  validationRules,
}): JSX.Element => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => {
        return (
          <FormErrorWrapper
            name={name}
            errorType={errors}
            validationRules={validationRules}
            message={message}
          />
        );
      }}
    />
  );
};
