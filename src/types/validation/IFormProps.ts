import { IReactHookFormProps } from "./IReactHookFormProps";
import { IValidationRules } from "./IValidationRules";

export interface IFormProps extends IReactHookFormProps{
  id: string;
  name: string;
  label?: string;
  inputType: string;
  validationRules?: IValidationRules;
  placeholder?: string;
  value?: string | number | undefined;
  isChecked?: boolean;
  hasValidation?: boolean;
}
