import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'search',component:SearchComponent},
    {path:'movies/:id',component:MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }