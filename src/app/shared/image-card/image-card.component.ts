import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item.interface';


@Component({
  selector: 'shared-image-card',
  standalone: true,
  imports: [],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    if(!this.item) throw Error('Item propety is required');
  }

  @Input()
  public item!: Item;

}
