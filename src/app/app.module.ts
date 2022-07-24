import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { StudentComponent } from './student/student.component';
import {MatToolbarModule} from '@angular/material/toolbar';


const material = [
  MatToolbarModule
]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    material,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [material]
})
export class AppModule { }
