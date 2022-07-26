import { Component, OnInit } from '@angular/core';
import { StudentService } from '../studentService/student.service';
import { student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './studentList.component.html',
  styleUrls: ['./studentList.component.css']
})
export class StudentComponent implements OnInit {

  public studentArray: student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudent()

  }


    private getStudent(){
      this.studentService.getStudent().subscribe((data: student[])=> {
      
        console.log(data);
        this.studentArray = data;
      });
    }
}
