import {Http} from '@angular/http'
import {Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
export class erro {
    static handlerErro(erro: Response | any){
        let mensagem: string;
        
        if (erro instanceof Response ) {
            mensagem = `Parece que houve um erro ${erro.status} e por isso o endereço ${erro.url} não deu bom, ${erro.statusText}`
        } else {
            mensagem = erro.toString();
        }
        alert(mensagem);
        return Observable.throw(mensagem)
    }
}