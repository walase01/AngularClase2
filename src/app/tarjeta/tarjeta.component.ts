import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

 @Input() name : string = '';
 @Input() lastName : string = '';
 @Input() bio : string = '';

}
