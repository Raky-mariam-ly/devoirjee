import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importation de RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule]  // Ajoutez RouterModule ici
})
export class AppComponent {
  title = 'My Angular App';
}
