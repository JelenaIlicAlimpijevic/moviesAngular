import { Injectable } from '@angular/core';
import {Movie} from '../models/movie';
import {examples} from '../exsamples';
import {Observable, Observer} from 'rxjs';


@Injectable()
export class MoviesService {
	private movies:Movie[];

	getMovies(){
		
	return new Observable((o:Observer<any>)=>{
   	  const movie=examples.map(example=>new Movie(example.id, 
   	  												example.name, 
   	  												example.director,
   	  												example.imageUrl,
   	  												example.duration,
   	  												example.releaseDate,
   	  												example.genres
												));
      o.next(movie);
  });
}
  

}
