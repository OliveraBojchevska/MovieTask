import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import {AddComponent} from './add/add.component';


const routes: Routes = [

  {path:  "", pathMatch:  "full",redirectTo:  "movies"},
  {path: 'movies', component: MoviesComponent},
  {path: 'add', component: AddComponent},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
