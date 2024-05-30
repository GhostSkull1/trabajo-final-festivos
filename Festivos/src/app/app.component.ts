import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarComponent } from './features/componentes/listar/listar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ListarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Festivos';
}
