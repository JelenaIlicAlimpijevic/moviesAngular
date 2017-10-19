import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesService} from './shared/services/movies.service';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MoviesComponent } from './components/movies/movies.component';

const appRoutes:Routes=[
{path:'', component: MoviesComponent}]

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],

  exports: [
        RouterModule
    ],

  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
