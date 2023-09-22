import {Injectable} from '@angular/core';
import {Tutorial} from "../models/tutorial";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const BASE_URL = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) {
  }

  getOne(id: number): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${BASE_URL}/${id}`);
  }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(BASE_URL);
  }

  deleteAll(): Observable<void> {
    return this.http.delete<void>(BASE_URL);
  }

  create(tutorial: Tutorial): Observable<Tutorial> {
    return this.http.post<Tutorial>(BASE_URL, tutorial);
  }


  deleteTutorial(id: number): Observable<void> {
    return this.http.delete<void>(`${BASE_URL}/${id}`);
  }
}
