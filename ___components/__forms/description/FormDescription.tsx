/**
 * @name FormDescription
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
import React from 'react';
import { FormDescriptionStyles } from './FormDescriptionStyles';

interface FormDescriptionProps {
  description: String;
}

export const FormDescription: React.FC<FormDescriptionProps> = ({
  description,
}): JSX.Element => {
  return <FormDescriptionStyles>{description}</FormDescriptionStyles>;
};
