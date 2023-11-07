import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solution } from '../models/solution';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  private URL = '../assets/Solutions.json';

  constructor(private httpClient: HttpClient) {}

  GetSolutions():Observable<Solution[]>{
    return this.httpClient.get<Solution[]>(this.URL);
  }
}
