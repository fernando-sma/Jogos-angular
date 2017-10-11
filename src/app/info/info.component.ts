import { Component, OnInit } from '@angular/core';
import {jogos} from '../../app/principal/jogos/jogos.model'
import {jogosService} from '../principal/jogos/jogos.service'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'mt-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private jogosService: jogosService, private rota: ActivatedRoute) { }

  ngOnInit() {
     // this.jogosService.busca()
  }

}
