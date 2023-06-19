import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  userName: any;
  level:string="LOW";
  constructor(private router: Router) {
    const userName = localStorage.getItem('sharedData');
    !userName ? this.router.navigate(['/home']) : this.userName = userName;
  }

  ngOnInit() {
  }

}
