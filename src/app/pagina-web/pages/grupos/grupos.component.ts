import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/image-card/image-card.component';


@Component({
  selector: 'app-grupos',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.css'
})
export default class GruposComponent {
  grupos = {
    grupo1:{
      nombre: 'Caballeros del Santo Sepulcro',
      imageUrl:'../../../assets/images/caballeros.png',
      coordinador:'Nombre coordinador grupo 1',
      whatsapp:'75111111'
    },
    grupo2:{
      nombre: 'Coro Canto y vida',
      imageUrl:'../../../assets/images/corocantovida.jpg',
      coordinador:'Nombre coordinador grupo 2',
      whatsapp:'75222222'
    },
    grupo3:{
      nombre: 'Coro Juventud de Cristo',
      imageUrl:'../../../assets/images/corojuventudcristo.png',
      coordinador:'Nombre coordinador grupo 3',
      whatsapp:'75333333'
    },
    grupo4:{
      nombre: 'Catequesis adultos',
      imageUrl:'../../../assets/images/catequesisadultos.png',
      coordinador:'Nombre coordinador grupo 4',
      whatsapp:'7444444'
    },
    grupo5:{
      nombre: 'Catequesis confirmación',
      imageUrl:'../../../assets/images/catequesisconfirmacion.jpg',
      coordinador:'Nombre coordinador grupo 5',
      whatsapp:'75555555'
    },
    grupo6:{
      nombre: 'Catequesis familiar',
      imageUrl:'../../../assets/images/catequesisfamiliar.jpg',
      coordinador:'Nombre coordinador grupo 6',
      whatsapp:'75666666'
    },
    grupo7:{
      nombre: 'Catequesis primera comunión',
      imageUrl:'../../../assets/images/secretaria.jpg',
      coordinador:'Nombre coordinador grupo 7',
      whatsapp:'75777777'
    },
    grupo8:{
      nombre: 'Cursillistas de colores',
      imageUrl:'../../../assets/images/secretaria.jpg',
      coordinador:'Nombre coordinador grupo 8',
      whatsapp:'75888888'
    },
    grupo9:{
      nombre: 'Legión de María',
      imageUrl:'../../../assets/images/secretaria.jpg',
      coordinador:'Nombre coordinador grupo 9',
      whatsapp:'75999999'
    },
    grupo10:{
      nombre: 'María auxiliadora',
      imageUrl:'../../../assets/images/secretaria.jpg',
      coordinador:'Nombre coordinador grupo 10',
      whatsapp:'75101010'
    },
    grupo11:{
      nombre: 'Ministras piadosas',
      imageUrl:'../../../assets/images/secretaria.jpg',
      coordinador:'Nombre coordinador grupo 11',
      whatsapp:'75111111'
    },
    grupo12:{
      nombre: 'Monaguillos',
      imageUrl:'../../../assets/images/secretaria.jpg',
      coordinador:'Nombre coordinador grupo 12',
      whatsapp:'75121212'
    },
    grupo13:{
      nombre: 'Pastoral Juvenil',
      imageUrl:'../../../assets/images/secretaria.jpg',
      coordinador:'Nombre coordinador grupo 13',
      whatsapp:'75131313'
    },
  }
  data = Object.values(this.grupos);
}
