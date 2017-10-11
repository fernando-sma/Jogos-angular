import { jogos } from './jogos.model';
import { API } from '../../../../dados.api';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {erro} from '../../../../erro';
import 'rxjs/add/operator/catch';
@Injectable()
export class jogosService {


  constructor(private http: Http) { }

  games(): Observable<jogos[]> {
    return this.http.get(`${API}/jogos`).map(response => response.json()).catch(erro.handlerErro);
  }

  busca(id: string): Observable<jogos>{
    return this.http.get(`${API}/jogos/${id}`).map(Response => Response.json()).catch(erro.handlerErro);
  }
}


/*

jogos: jogos[] = [
        
            {
              id: 1,
              nome: "pac-man",
              descricao: "O clássico jogo está de volta",
              censura: 10,
              classificacao: 9.6,
              img: "/../assets/img/jogos/pac-man.jpeg"
            },
            {
              id: 2,
              nome: "Pinball",
              descricao: "Teste suas habilidades nesse incrivel jogo",
              censura: 10,
              classificacao: 8.7,
              img: "/../assets/img/jogos/pinball.jpeg"
            },
            {
              id: 3,
              nome: "Sinuca",
              descricao: "Mostre que você é bom de taco",
              censura: 10,
              classificacao: 7.3,
              img: "/../assets/img/jogos/sinuca.jpeg"
            }, {
              id: 4,
              nome: "Plague inc.",
              descricao: "Você é capaz de infectar o mundo?",
              censura: 12,
              classificacao: 7.9,
              img: "/../assets/img/jogos/plague.jpeg"
            }, {
              id: 5,
              nome: "Angry birds",
              descricao: "É um pássaro? é um avião?",
              censura: 14,
              classificacao: 8.3,
              img: "/../assets/img/jogos/angry.jpeg"
            }
        
          ]
          */