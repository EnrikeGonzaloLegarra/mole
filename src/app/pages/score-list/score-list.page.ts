import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.page.html',
  styleUrls: ['./score-list.page.scss'],
})
export class ScoreListPage implements OnInit {
  scores: any[] = [];
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.scores = this.userService.getStorageData();
  }

  gotToGame() {
    this.userService.deleteUser();
    this.router.navigate(['/home']);
  }
}
