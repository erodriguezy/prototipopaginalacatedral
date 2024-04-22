import { Component, Input, OnInit } from '@angular/core';
import { Sacramento } from '../../interfaces/sacramento.interface';

@Component({
  selector: 'shared-image-card',
  standalone: true,
  imports: [],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    if(!this.sacramento) throw Error('Sacrmento propety is required');
  }

  @Input()
  public sacramento!: any;

}
