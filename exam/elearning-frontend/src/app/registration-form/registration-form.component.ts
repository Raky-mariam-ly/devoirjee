import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { StudentService } from '../services/student.service';
import { ClassesService } from '../services/classes.service';
import { Student } from '../models/student.model';
import { Classes } from '../models/classes.model';
import { Registration } from '../models/registration.model';

@Component({
  selector: 'app-registration-form',
  standalone: true, // Si vous utilisez des composants autonomes
  imports: [CommonModule, ReactiveFormsModule], // Importez CommonModule et ReactiveFormsModule ici
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  students: Student[] = [];
  classes: Classes[] = [];

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private studentService: StudentService,
    private classesService: ClassesService
  ) {
    this.registrationForm = this.fb.group({
      date: ['', Validators.required],
      description: ['', Validators.required],
      studentId: ['', Validators.required],
      classesId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadStudents();
    this.loadClasses();
  }

  loadStudents(): void {
    this.studentService.getAllStudents().subscribe(
      (data) => this.students = data,
      (error) => console.error('Error fetching students', error)
    );
  }

  loadClasses(): void {
    this.classesService.getAllClasses().subscribe(
      (data) => this.classes = data,
      (error) => console.error('Error fetching classes', error)
    );
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const registration: Registration = {
        ...this.registrationForm.value,
        student: { id: this.registrationForm.value.studentId },
        classes: { id: this.registrationForm.value.classesId }
      };
      this.registrationService.createRegistration(registration).subscribe(
        () => {
          alert('Inscription créée avec succès !');
          this.registrationForm.reset();
        },
        (error) => console.error('Error creating registration', error)
      );
    }
  }
}