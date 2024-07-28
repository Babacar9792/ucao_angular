import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './components/core/core.component';

const routes: Routes = [
  {
    path : "", 
    component : CoreComponent,
    children : [
      {
        path : "operation", loadChildren : ()=> import("../default-crud/default-crud.module").then(m => m.DefaultCrudModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
