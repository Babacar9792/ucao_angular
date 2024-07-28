import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DatePipe} from '@angular/common';

import { DefaultCrudRoutingModule } from './default-crud-routing.module';
import { DefaultCrudComponent } from './default-crud/default-crud.component';


@NgModule({
  declarations: [
    DefaultCrudComponent
  ],
  imports: [
    CommonModule,
    DefaultCrudRoutingModule,
    MatProgressSpinnerModule,
    MatTableModule, 
    MatSortModule,
    MatPaginatorModule,
    DatePipe
  ]
})
export class DefaultCrudModule { }
