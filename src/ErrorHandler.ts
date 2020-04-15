import { ErrorHandler, Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";




@Injectable()
class MyErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        if (error instanceof HttpErrorResponse) {
            this.myErrorHandler(error);
        }

        else {
            console.log('Error occured on client side');
        }
    }

    myErrorHandler(error: HttpErrorResponse) {

        const err = error.error;
        const message = err.message;

        switch (message) {
            case 'TOKEN_INVALID':

                break;

            case 'TOKEN_NOT_SUPPLIED':

                break;

            case 'INTERNAL_ERROR':

                break;

            case 'NOT_ENOUGH_CREDIT_SELLER':

                break;

            case 'NOT_ENOUGH_CREDIT_BUYER':

                break;

            default:
                break;
        }

    }



}


export default MyErrorHandler;