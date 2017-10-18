import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import {item} from './item.model'
@Component({
  selector: 'mt-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: item;
  @Output() adicionar = new EventEmitter()
  
  constructor() { }

  ngOnInit() {
    this.adicionar.emit(this.item);
  }

}
