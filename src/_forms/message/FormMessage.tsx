/**
 * @name FormMessage
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { FormMessageStyles } from '@/components/_forms/message/FormMessageStyles';

interface FormMessageProps {
  message: String;
}

export const FormMessage: React.FC<FormMessageProps> = ({
  message,
}): JSX.Element => {
  return <FormMessageStyles>{message}</FormMessageStyles>;
};
