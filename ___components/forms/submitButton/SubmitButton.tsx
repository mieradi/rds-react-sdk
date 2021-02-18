/**
 * @name SubmitButton
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React from 'react';
import { Button } from '@/components/button/Button';
import { Input } from '@/components/forms/input/Input'

interface SubmitButtonProps {}

export const SubmitButton: React.FC<SubmitButtonProps> = ({}): JSX.Element => {
  return (
    <div className="form__field form__field--button">
      {/* <Button isSubmit title="Submit" /> */}
      <Input inputType='submit' handleOnChange={()=>undefined}/>
    </div>
  );
};
