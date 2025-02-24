import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClassesService } from '../services/classes.service';
import { Classes } from '../models/classes.model';

@Component({
  selector: 'app-classes-form',
  standalone: true, // Si vous utilisez des composants autonomes
  imports: [CommonModule, ReactiveFormsModule], // Importez ReactiveFormsModule ici
  templateUrl: './classes-form.component.html',
  styleUrls: ['./classes-form.component.css']
})
export class ClassesFormComponent {
  classesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private classesService: ClassesService
  ) {
    this.classesForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.classesForm.valid) {
      const classes: Classes = this.classesForm.value;
      this.classesService.createClasses(classes).subscribe(
        () => {
          alert('Classe créée avec succès !');
          this.classesForm.reset();
        },
        (error) => console.error('Error creating classes', error)
      );
    }
  }
}