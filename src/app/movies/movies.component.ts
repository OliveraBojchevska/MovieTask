import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
//import {MOVIES} from './../my-movies';
import {MovieService} from '../movie.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
s
  movies:Movie[];

  constructor(public movieService: MovieService,private router:Router) { 
    this.movies=this.movieService.getMovies();
  }


  

  getMovies(){
    this.movies=this.movieService.getMovies();
  }
  showDetails():void{
    this.router.navigate(['./add']);
    

  }

  ngOnInit(): void {
    this.getMovies();
  }


}
