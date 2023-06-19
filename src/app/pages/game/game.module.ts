import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';
import {TranslateModule} from "@ngx-translate/core";
import {MoleComponent} from "../../components/mole/mole.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule,
    TranslateModule
  ],
  declarations: [GamePage, MoleComponent]
})
export class GamePageModule {}
