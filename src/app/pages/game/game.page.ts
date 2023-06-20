import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MoleComponent} from "../../components/mole/mole.component";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage {
  @ViewChild(MoleComponent, {static: false}) moleComponent?: MoleComponent;
  userName: any;
  score: number = 0;
  time: number = 0;
  isStarted: boolean = false;
  level: number = 0;
  protected readonly environment = environment;

  constructor(private router: Router) {
    const userName = localStorage.getItem('sharedData');
    !userName ? this.router.navigate(['/home']) : this.userName = userName;
  }

  startGame() {
   this.moleComponent?.startGame();
  }


  stopGame() {
  this.moleComponent?.stopGame();
  }

  toggleGame() {
    this.isStarted = !this.isStarted;
    this.isStarted ? this.startGame() : this.stopGame();
  }

  updateHit(hit: number) {
    this.score += hit;
  }

}
