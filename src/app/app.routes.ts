import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path  : "auth",
        loadChildren : ()=> import("./auth/auth.module").then(m => m.AuthModule)
    },
    {
        path : "",
        loadChildren : ()=> import("./core/core.module").then(m => m.CoreModule)
    },
    {
        path : "**", redirectTo : ""
    }

];
