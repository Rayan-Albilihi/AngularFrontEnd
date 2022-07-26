import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }


  // Method to get the student from the API
  private getUrl = "http://localhost:8060/api/student/getAllStudent";

  getStudent(): Observable<student[]>{
    return this.http.get<student[]>(`${this.getUrl}`);
  }
  
  private createUrl = "http://localhost:8060/api/student/createStudent";
  createStudent(student: student): Observable<Object>{
    return this.http.post(`${this.createUrl}`, student);
  }
  
    // Method to get the student from the API
  private deleteUrl = "http://localhost:8060/api/student/deleteAllStudents";

  deleteStudent(): void{
   this.http.delete(`${this.getUrl}`);
  }
}
