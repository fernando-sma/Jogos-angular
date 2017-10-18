import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {jogosService} from '../../principal/jogos/jogos.service'
import { Observable } from "rxjs/Observable";
import {item} from '../item/item.model'
@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


menu: Observable<item[]>

  constructor( public jogosService: jogosService , public rota : ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.jogosService.menu(this.rota.parent.snapshot.params['id'])
  }
  funcao(item){
      console.log(item);
  }

}
