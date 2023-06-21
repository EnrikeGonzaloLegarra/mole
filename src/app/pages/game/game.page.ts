import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MoleComponent} from "../../components/mole/mole.component";
import {environment} from "../../../environments/environment";
import {ToastController} from "@ionic/angular";
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import {UserService} from "../../service/user.service";

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

  constructor(private router: Router,
              private toastController: ToastController,
              private userService: UserService,
              private vibration: Vibration) {
    const userName = this.userService.getUser();
    !userName ? this.router.navigate(['/home']) : this.userName = userName;
  }

  startGame() {
    let duration = environment.GAME_TIME;
    this.vibration.vibrate(1000);
    this.timeInterval = setInterval(() => {
      this.time = duration;
      duration--;
      if (duration <= 0 || this.timeInterval === undefined) {
        this.stopGame();
        this.isStarted = false;
        this.time = environment.GAME_TIME;
      }
    }, 1000);
    this.moleComponent?.startGame();
  }


  stopGame() {
    this.moleComponent?.stopGame();
    this.time = environment.GAME_TIME;
    clearInterval(this.timeInterval);this.userService.saveScore(this.userName,this.score);
    this.router.navigate(['/score-list']);
    this.score = 0;
  }

  toggleGame() {
    this.isStarted = !this.isStarted;
    this.isStarted ? this.startGame() : this.stopGame();
  }

  async updateHit(hit: number) {
    this.score += hit;
    this.vibration.vibrate(1000);
    await this.presentToast(`HIT`, 'bottom')
  }

  async presentToast(message: string, position: "bottom" | "top" | "middle" | undefined) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      position: position,
    });
    await toast.present();
  }

  changeUser() {
    this.userService.deleteUser()
    this.router.navigate(['/home']);
  }

}
