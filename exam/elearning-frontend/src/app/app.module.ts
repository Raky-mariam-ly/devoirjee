import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Importez provideHttpClient
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './services/student.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StudentService,
    provideHttpClient(withInterceptorsFromDi()) // Configurez HttpClient ici
  ],
  bootstrap: []
})
export class AppModule { }