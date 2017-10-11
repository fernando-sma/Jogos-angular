import { Component, OnInit } from '@angular/core';
import { jogos } from './jogos/jogos.model';
import {jogosService} from './jogos/jogos.service'
@Component({
  selector: 'mt-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  jogos: jogos[];


  constructor(public jogosService: jogosService) {}

  ngOnInit() {
    this.jogosService.games().subscribe(jogos => this.jogos = jogos);
  }

}
