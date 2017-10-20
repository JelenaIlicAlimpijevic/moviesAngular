import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import {MovieRowComponent} from '../components/movie-row/movie-row.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
  	MoviesService 
  ],
  declarations: [MovieRowComponent
    
  ],
  exports: [MovieRowComponent
    
  ]
})
export class SharedModule { }
