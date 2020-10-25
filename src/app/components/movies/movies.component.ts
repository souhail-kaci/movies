import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any[] = [];
  movieName : string;
  movie : any;


  constructor(private movieSevice: MovieService) {
  }

  ngOnInit(): void {

  }

  Search(){
    this.movieSevice.getMovies(this.movieName).subscribe(movie => {
     this.movies = movie.Search;
     console.log(this.movies);
    })
  }
  getMovieInfo(id: string){
   this.movieSevice.getMovie(id).subscribe( movie => {
     this.movie = movie;
     console.log(this.movie);
   })

  }

}
