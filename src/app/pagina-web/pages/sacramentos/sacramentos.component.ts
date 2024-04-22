import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/image-card/image-card.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sacramentos',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './sacramentos.component.html',
  styleUrl: './sacramentos.component.css'
})
export default class SacramentosComponent {
  sacramentos = {
    bautismo:{
      nombre: 'Bautismo',
      imageUrl:'../../../assets/images/bautismo.png'
    },
    comunion:{
      nombre: 'Primera Comunión',
      imageUrl:'../../../assets/images/primera-comunion.jpg'
    },
    confirmacion:{
      nombre: 'Confirmación',
      imageUrl:'../../../assets/images/confirmacion.jpg'
    },
    reconciliacion:{
      nombre: 'Reconciliación',
      imageUrl:'../../../assets/images/reconciliacion.jpg'
    },
    uncion:{
      nombre: 'Unción',
      imageUrl:'../../../assets/images/uncion-enfermos.jpg'
    },
    matrimonio:{
      nombre: 'Matrimonio',
      imageUrl:'../../../assets/images/matrimonio.jpg'
    },
    orden:{
      nombre: 'Orden Sacerdotal',
      imageUrl:'../../../assets/images/orden-sacerdotal.jpg'
    }
  }
  data = Object.values(this.sacramentos);




}
