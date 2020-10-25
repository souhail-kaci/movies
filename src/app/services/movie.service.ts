import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(movieName): Observable<any>{
    return  this.http.get('http://www.omdbapi.com/?s='+movieName+'&apikey=43769ae3');
  }

  getMovie(movieId):Observable<any>{
    return  this.http.get('http://www.omdbapi.com/?i='+movieId+'&apikey=43769ae3');
  }



}
