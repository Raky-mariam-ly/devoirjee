import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  standalone: true, // Si vous utilisez des composants autonomes
  imports: [CommonModule], // Importez CommonModule ici
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

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(
      () => this.loadStudents(),
      (error) => console.error('Error deleting student', error)
    );
  }
}