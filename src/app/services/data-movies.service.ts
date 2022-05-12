import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultTMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataMoviesService {

  constructor(private http: HttpClient) { }

  getDiscover() {
    return this.http.get<ResultTMDB>('https://api.themoviedb.org/3/genre/movie/list?api_key=bdc55635f4af0e096652bd2bb2b6c561&language=es');
  }

}
