import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { Movie } from '../movie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

movie:Movie;
  id:number;
  thumbnail: string;
  name: string;
  description: string;
  length: number;
  director: string;
  actors: string[];  

 editMode=true;

  constructor(public movieService: MovieService,private router:Router) {

   }
goBack():void{

  this.router.navigate(['./movies']);
}

saveMovie(movie){
  movie.id+=1;
  movie.thumbnail=this.thumbnail;
  movie.name=this.name;
  movie.description=this.description;
  movie.length=this.length;
  movie.director=this.director;
  movie.actors=this.actors;
  
this.movieService.MOVIES.push(this.movie);
this.router.navigate(['./movies']);

}
editMovie(){

  this.editMode=!this.editMode;
}

 ngOnInit(): void {
   this.saveMovie(this.movie);
  }

}
