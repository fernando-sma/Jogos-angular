import {Routes} from '@angular/router';
import {ConteudoComponent} from './conteudo/conteudo.component';
import {SobreComponent} from './sobre/sobre.component'
import {PrincipalComponent} from './principal/principal.component';
import {InfoComponent} from './info/info.component'

export const rotas: Routes = [
    {path: '', component: ConteudoComponent},
    {path: 'sobre' , component: SobreComponent},
    {path: 'jogos/:id' , component: InfoComponent},
    {path: 'jogos' , component: PrincipalComponent}
]