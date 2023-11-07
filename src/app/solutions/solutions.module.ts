import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionComponent } from './components/solution/solution.component';
import { SolutionListComponent } from './components/solution-list/solution-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path:"", component:SolutionListComponent},
];

@NgModule({
  declarations: [
    SolutionComponent,
    SolutionListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class SolutionsModule { }
