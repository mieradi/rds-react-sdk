interface IValidationObject {
    value: string | number;
    message: string;
}
export interface IValidationRules {
  required?: boolean | string;
  maxLength?: number | IValidationObject;
  minLength?: number | IValidationObject;
  max?: number | IValidationObject;
  min?: number | IValidationObject;
}


