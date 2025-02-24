import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classes } from '../models/classes.model';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  private apiUrl = 'http://localhost:8089/api/classes';

  constructor(private http: HttpClient) { }

  getAllClasses(): Observable<Classes[]> {
    return this.http.get<Classes[]>(this.apiUrl);
  }

  getClassesById(id: number): Observable<Classes> {
    return this.http.get<Classes>(`${this.apiUrl}/${id}`);
  }

  createClasses(classes: Classes): Observable<Classes> {
    return this.http.post<Classes>(this.apiUrl, classes);
  }

  updateClasses(id: number, classes: Classes): Observable<Classes> {
    return this.http.put<Classes>(`${this.apiUrl}/${id}`, classes);
  }

  deleteClasses(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}