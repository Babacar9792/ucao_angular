import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { inject } from '@angular/core';
import { Router } from 'express';

export const notAccessLoginGuard: CanActivateFn = (route, state) => {
 
  const autService = inject(AuthService);
  const router = inject(Router);
  
  if(autService.isAuthenticate()){
    router.navigateByUrl("");
    return false;
  }
  return true;
};
