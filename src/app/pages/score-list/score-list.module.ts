import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoreListPageRoutingModule } from './score-list-routing.module';

import { ScoreListPage } from './score-list.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoreListPageRoutingModule,
    TranslateModule
  ],
  declarations: [ScoreListPage]
})
export class ScoreListPageModule {}
