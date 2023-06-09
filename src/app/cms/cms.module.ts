import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { TaskComponent } from './task/task.component';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    TaskComponent,
    GridComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
