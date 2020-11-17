/**
 * @name FormWarning
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { FormWarningStyles } from '@/components/forms/warning/FormWarningStyles';

interface FormWarningProps {
  message: String;
}

export const FormWarning: React.FC<FormWarningProps> = ({
  message,
}): JSX.Element => {
  return <FormWarningStyles>{message}</FormWarningStyles>;
};
