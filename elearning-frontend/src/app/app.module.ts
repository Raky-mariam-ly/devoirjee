import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Importez provideHttpClient
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  providers: [provideHttpClient(withInterceptorsFromDi())], // Configurez HttpClient ici
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getAllStudents().subscribe(
      (data) => this.students = data,
      (error) => console.error('Error fetching students', error)
    );
  }
}