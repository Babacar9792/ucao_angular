import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

export const catchErrorInterceptor: HttpInterceptorFn = (req, next) => {
  let router = inject(Router);
    return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let err = error.error;
        if (error.status == 401 && error.statusText == "Unauthorized") {
          localStorage.clear();
          router.navigateByUrl('/auth');
        }
        if (!err.message) {
          err = {
            message: error.message,
            status: false,
            data: []
          }
        }
        throw (err);
      })
    );
};
