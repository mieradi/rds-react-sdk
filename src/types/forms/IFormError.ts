import { IErrorType } from "../validation/IErrorType";
import { IValidationRules } from "../validation/IValidationRules";

export interface IFormError {
  name: string;
  errorType: IErrorType;
  validationRules?: IValidationRules;
  message: string;
}
