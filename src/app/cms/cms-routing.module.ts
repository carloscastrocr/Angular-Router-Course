import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { GridComponent } from './grid/grid.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path:'',
    component:LayoutComponent,
    children:[
      {path:'',redirectTo:'grid',pathMatch:'full'},
      {path:'tasks', component:TaskComponent},
      {path:'grid', component:GridComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
