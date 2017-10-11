import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CabecaComponent } from './cabeca/cabeca.component';
import { SobreComponent } from './sobre/sobre.component';
import { ConteudoComponent } from './conteudo/conteudo.component'
import { rotas } from './rotas.routes';
import { PrincipalComponent } from './principal/principal.component';
import { JogosComponent } from './principal/jogos/jogos.component';
import { jogosService } from '../app/principal/jogos/jogos.service';
import { InfoComponent } from './info/info.component';
import { MenuComponent } from './info/menu/menu.component';
import { CartaoComponent } from './info/cartao/cartao.component';
import { ItemComponent } from './info/item/item.component';
@NgModule({
  declarations: [
    AppComponent,
    CabecaComponent,
    SobreComponent,
    ConteudoComponent,
    PrincipalComponent,
    JogosComponent,
    InfoComponent,
    MenuComponent,
    CartaoComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [jogosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
