import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }, {
    path: 'game',
    loadChildren: () => import('../game/game.module').then(m => m.GamePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {
}
