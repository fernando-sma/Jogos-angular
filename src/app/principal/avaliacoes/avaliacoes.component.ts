import { Component, OnInit } from '@angular/core';
import {jogosService} from '../jogos/jogos.service'
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'mt-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.css']
})
export class AvaliacoesComponent implements OnInit {

    avaliacoes: Observable<any>

  constructor(private jogosService: jogosService, private rotas: ActivatedRoute) { }

  ngOnInit() {
      this.avaliacoes = this.jogosService.avaliacoes(this.rotas.parent.snapshot.params['id']);
  }

}
