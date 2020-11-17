/**
 * @name TextArea
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */
import React from 'react';
import { TextAreaStyles } from '@/components/forms/textarea/TextAreaStyles';
import { FormDescription } from '@/components/forms/description/FormDescription';

interface TextAreaProps {
  handleOnChange(event: React.FormEvent<HTMLTextAreaElement>): void;
  rows: number;
  label?: string;
  description?: string;
  placeholder?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  handleOnChange,
  description,
  label,
  placeholder,
  rows,
}): JSX.Element => {
  return (
    <TextAreaStyles>
      {label && <label htmlFor="textarea">{label}</label>}
      {description && <FormDescription description={description} />}
      <textarea
        {...(handleOnChange && { onChange: handleOnChange })}
        id="textarea"
        name="textarea"
        rows={rows}
        placeholder={placeholder}
      ></textarea>
    </TextAreaStyles>
  );
};
