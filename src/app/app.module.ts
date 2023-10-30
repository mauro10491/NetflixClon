import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MoviesComponent } from './pages/movies/movies.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { MoviesApiServiceService } from './service/movies-api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MoviesApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
