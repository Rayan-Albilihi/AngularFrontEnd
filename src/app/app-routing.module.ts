import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateStudentComponent } from './createStudent/createStudent.component';
import { StudentComponent } from './studentList/studentList.component';


const routes: Routes = [
    {path: 'student',component: StudentComponent},
    {path: 'create-student', component: CreateStudentComponent},
    {path: '', redirectTo: 'student', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule],
 // declarations:[AppComponent],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }