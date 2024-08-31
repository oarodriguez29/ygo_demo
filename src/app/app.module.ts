import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { CardDeckComponent } from './components/card-deck/card-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GameBoardComponent,
    CardDeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
