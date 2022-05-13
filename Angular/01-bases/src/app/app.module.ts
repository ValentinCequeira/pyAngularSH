import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule, ContadorModule, DbzModule],
  providers: [], //servicios especificos a un modulo
  bootstrap: [AppComponent], //son los componentes principales
})
export class AppModule {}
