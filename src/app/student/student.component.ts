import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public students: student[] = [];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getStudent().subscribe((data: student[])=> {
      
      console.log(data);
      this.students = data;
    });
  }

}
