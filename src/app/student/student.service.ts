import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8080/api/student/getAllStudent";
  
  constructor(private http: HttpClient) { }

  getStudent(): Observable<student[]>{
    return this.http.get<student[]>(`${this.baseUrl}`);
  }
  
}
