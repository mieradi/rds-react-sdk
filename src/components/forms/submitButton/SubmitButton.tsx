/**
 * @name SubmitButton
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
import React from 'react';
import { Button } from '@/components/button/Button';

interface SubmitButtonProps {}

export const SubmitButton: React.FC<SubmitButtonProps> = ({}): JSX.Element => {
  return (
    <div className="form__field form__field--button">
      <Button isSubmit title="Submit" />
    </div>
  );
};
