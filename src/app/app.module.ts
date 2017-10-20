import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesService} from './shared/services/movies.service';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieRowComponent } from './components/movie-row/movie-row.component';
import {SharedModule} from './shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import {SearchModule} from './shared/search.module';
import { SearchPageComponent } from './components/search-page/search-page.component';

const appRoutes:Routes=[
{path:'', component: MoviesComponent}]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent,
    SearchComponent,
    SearchPageComponent
    ],
   
  imports: [
    SearchModule,
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],

  exports: [
        RouterModule
    ],

  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
