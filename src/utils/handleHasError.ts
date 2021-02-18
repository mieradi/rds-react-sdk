/**
* @name handleHasError
* @desc description here
* @param {} param desc
* @returns returns desc
*/

import { IErrorType } from "../types/validation/IErrorType";


export function handleHasError(errors: IErrorType, name:string): boolean{
    return errors.hasOwnProperty(name);
}
