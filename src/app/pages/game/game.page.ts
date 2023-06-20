import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MoleComponent} from "../../components/mole/mole.component";
import {environment} from "../../../environments/environment";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage {
  @ViewChild(MoleComponent, {static: false}) moleComponent?: MoleComponent;
  userName: any;
  score: number = 0;
  time: number = environment.GAME_TIME;
  isStarted: boolean = false;
  level: number = 0;
  timeInterval: any;
  hitCount: number = 0;
  readonly environment = environment;

  constructor(private router: Router, private toastController: ToastController) {
    const userName = localStorage.getItem('sharedData');
    !userName ? this.router.navigate(['/home']) : this.userName = userName;
  }

  startGame() {
    let duration = environment.GAME_TIME;
    this.timeInterval = setInterval(() => {
      this.time = duration;
      duration--;
      if (duration < 0 || this.timeInterval === undefined) {
        clearInterval(this.timeInterval);
        this.time = duration;
      }
    }, 1000);
    this.moleComponent?.startGame();
  }


  stopGame() {
    this.moleComponent?.stopGame();
    this.time = environment.GAME_TIME;
    clearInterval(this.timeInterval);
    this.score = 0;
  }

  toggleGame() {
    this.isStarted = !this.isStarted;
    this.isStarted ? this.startGame() : this.stopGame();
  }

  async updateHit(hit: number) {
    this.score += hit;
    await this.presentToast(this.hitCount++)
  }

  async presentToast(count: number) {
    const toast = await this.toastController.create({
      message: `HIT ${count}`,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }
  changeUser(){
    localStorage.removeItem('sharedData');
    this.router.navigate(['/home']);
  }

}
