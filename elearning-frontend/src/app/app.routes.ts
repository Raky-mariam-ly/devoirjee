import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ClassesFormComponent } from './classes-form/classes-form.component';

export const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'students/new', component: StudentFormComponent },
  { path: 'registrations', component: RegistrationListComponent },
  { path: 'registrations/new', component: RegistrationFormComponent },
  { path: 'classes', component: ClassesListComponent },
  { path: 'classes/new', component: ClassesFormComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: '/students' } // Gestion des routes inconnues
];