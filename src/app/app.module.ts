import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { StudentComponent } from './studentList/studentList.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { CreateStudentComponent } from './createStudent/createStudent.component';
import { FormsModule } from '@angular/forms';

// const material = [
//   MatToolbarModule
// ]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    // material,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [material]
})
export class AppModule { }
