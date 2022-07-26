import { Component, OnInit } from '@angular/core';
import { StudentService } from '../studentService/student.service';
import { student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './createStudent.component.html',
  styleUrls: ['./createStudent.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: student = new student();
  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savStudent(){
    this.studentService.createStudent(this.student).subscribe(data =>{
      console.log(data);
      this.goTostudentList();
    },
    error => console.log(error));
  }
  
  goTostudentList(){
    this.router.navigate(['/studentArray']);

  }

  onSubmit(){
    console.log(this.student);
    this.savStudent();
  }
}
