import { Component, OnInit, Input } from '@angular/core';
import {jogos} from './jogos.model';
@Component({
  selector: 'mt-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

@Input() jogos: jogos;

  constructor() { }

  ngOnInit() {
  }

}
