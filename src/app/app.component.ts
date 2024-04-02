import { CommonModule, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NamePipe } from './name.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,UpperCasePipe,LowerCasePipe,NamePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pipe';
  studentList = [
    { name: "John", age: 18, grade: "12th", gender: "Male" },
    { name: "Emma", age: 17, grade: "11th", gender: "Female" },
    { name: "Michael", age: 16, grade: "10th", gender: "Male" },
    { name: "Sophia", age: 18, grade: "12th", gender: "Female" },
    { name: "William", age: 17, grade: "11th", gender: "Male" }
  ];
}
