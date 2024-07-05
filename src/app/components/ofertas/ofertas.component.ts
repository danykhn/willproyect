import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import AppComponent from '../../app.component';
@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [RouterModule,AppComponent],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export default class OfertasComponent {

}
