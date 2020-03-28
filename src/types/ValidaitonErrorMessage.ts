import { ErrorMessage } from "./ErrorMessage";
import {ValidationError} from 'sequelize';

export class ValidationErrorMessage extends ErrorMessage {
    private error: ValidationError;
    constructor(error: ValidationError) {
        super();
        this.error = error;

    }
    getMessage(): object {
        console.log(this.error.errors);
        return {
            message: 'Error in validation',
            errors: [1,2]
        }
    }

}