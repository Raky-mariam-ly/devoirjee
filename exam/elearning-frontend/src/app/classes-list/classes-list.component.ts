import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClassesService } from '../services/classes.service';
import { Classes } from '../models/classes.model';

@Component({
  selector: 'app-classes-list',
  standalone: true, // Si vous utilisez des composants autonomes
  imports: [CommonModule], // Importez CommonModule ici
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent {
deleteClasses(arg0: number) {
throw new Error('Method not implemented.');
}
  classes: Classes[] = [];

  constructor(private classesService: ClassesService) { }

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses(): void {
    this.classesService.getAllClasses().subscribe(
      (data) => this.classes = data,
      (error) => console.error('Error fetching classes', error)
    );
  }
}