import { Component } from '@angular/core';
import { TextImageCardComponent } from '../../../shared/text-image-card/text-image-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [TextImageCardComponent,CommonModule],
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.css'
})
export default class HorariosComponent {
  horarios = {
    atencionSecretaria:{
      nombre: 'Atención en Secretaría',
      imageUrl:'../../../assets/images/secretaria.jpg',
      horario1:'Lunes a Viernes de Mañanas de 8:00 a 12:30.Tardes de 15:00 a 18:30',
      horario2:'Sabado de 8:30 a 12:30'
    },
    misaComunitaria:{
      nombre: 'Misas Comunitarias',
      imageUrl:'../../../assets/images/misa.jpg',
      horario1:'Lunes, martes, miercoles, viernes y sábado a las 19:00 hrs.',
      horario2:''
    },
    misaIntenciones:{
      nombre: 'Misas con Intención',
      imageUrl:'../../../assets/images/misa2.png',
      horario1:'Mañanas: Lunes a Viernes 7:00 ',
      horario2:'Tardes: Lunes a Viernes 18:00  '
    },
    misaDominical:{
      nombre: 'Misas Dominicales',
      imageUrl:'../../../assets/images/misa.jpg',
      horario1:'Mañanas: 7:00, 9:00 y 11:00',
      horario2:'Tardes: 19:00'
    },
    Confesiones:{
      nombre: 'Confesiones',
      imageUrl:'../../../assets/images/reconciliacion.jpg',
      horario1:'Todos los viernes de 20:00 a 22:00',
      horario2:''
    },
    horaSanta:{
      nombre: 'Hora Santa',
      imageUrl:'../../../assets/images/adoracion.jpg',
      horario1:'Todos los Jueves a las 19:00',
      horario2:''
    },
  }
  data = Object.values(this.horarios);
}
