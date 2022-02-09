import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre : string = 'Jose';
  apellido : string = 'Marte';
  bio : string = 'estudiante de angular';
}
