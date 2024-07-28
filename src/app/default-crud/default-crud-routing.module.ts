import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultCrudComponent } from './default-crud/default-crud.component';

const routes: Routes = [
  {
    path : "", 
    component : DefaultCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultCrudRoutingModule { }
