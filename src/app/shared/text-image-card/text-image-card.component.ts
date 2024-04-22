import { Component, Input } from '@angular/core';
import { Horarios } from '../../interfaces/horarios.interface';

@Component({
  selector: 'shared-text-image-card',
  standalone: true,
  imports: [],
  templateUrl: './text-image-card.component.html',
  styleUrl: './text-image-card.component.css'
})
export class TextImageCardComponent {

@Input()

public horario!:Horarios;
}
