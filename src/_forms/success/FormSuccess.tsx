/**
 * @name FormSuccess
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';

interface FormSuccessProps {
  message: String;
}

export const FormSuccess: React.FC<FormSuccessProps> = ({
  message,
}): JSX.Element => {
  return <p>{message}</p>;
};
