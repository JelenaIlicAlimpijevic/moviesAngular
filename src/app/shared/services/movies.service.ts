import { Injectable } from '@angular/core';
import {Movie} from '../models/movie';
import {examples} from '../exsamples';
import {Observable, Observer} from 'rxjs';


@Injectable()
export class MoviesService {
	private movies:Movie[];

	getMovies(){
		
	return new Observable((o:Observer<any>)=>{
   	  let movie=examples.map(example=>{
         console.log(example);
        return new Movie(1,'2','3','4',5,'6'
                  // example.id, 
   	  												// example.name, 
   	  												// example.director,
   	  												// example.imageUrl,
   	  												// example.duration,
   	  												// example.releaseDate,
   	  												// example.genres
												)});
      // o.next(movie); console.log(examples);
      console.log(movie);
  }); 
}
  

}
