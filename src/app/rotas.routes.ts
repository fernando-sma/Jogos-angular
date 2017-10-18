import {Routes} from '@angular/router';
import {ConteudoComponent} from './conteudo/conteudo.component';
import {SobreComponent} from './sobre/sobre.component'
import {PrincipalComponent} from './principal/principal.component';
import {InfoComponent} from './info/info.component'
import { AvaliacoesComponent} from './principal/avaliacoes/avaliacoes.component';
import { MenuComponent } from "./info/menu/menu.component";
export const rotas: Routes = [
    {path: '', component: ConteudoComponent},
    {path: 'sobre' , component: SobreComponent},
    {path: 'jogos/:id' , component: InfoComponent,
    children: [
        {path: '' , redirectTo: 'menu', pathMatch: 'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'avaliacoes', component: AvaliacoesComponent}
    ]
    
    
},
    {path: 'jogos' , component: PrincipalComponent}
]