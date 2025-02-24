import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes'; // Importez les routes
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student-list/student-list.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ClassesFormComponent } from './classes-form/classes-form.component';

@NgModule({
  declarations: [
   
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // Configurez les routes
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppModule { }