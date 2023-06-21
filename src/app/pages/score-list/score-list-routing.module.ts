import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoreListPage } from './score-list.page';

const routes: Routes = [
  {
    path: '',
    component: ScoreListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoreListPageRoutingModule {}
