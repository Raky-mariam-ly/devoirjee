import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { Registration } from '../models/registration.model';

@Component({
  selector: 'app-registration-list',
  standalone: true,
  imports: [CommonModule], // Importez CommonModule ici
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent {
  registrations: Registration[] = [];

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.loadRegistrations();
  }

  loadRegistrations(): void {
    this.registrationService.getAllRegistrations().subscribe(
      (data) => this.registrations = data,
      (error) => console.error('Error fetching registrations', error)
    );
  }

  deleteRegistration(id: number): void {
    this.registrationService.deleteRegistration(id).subscribe(
      () => this.loadRegistrations(),
      (error) => console.error('Error deleting registration', error)
    );
  }
}