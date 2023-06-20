import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-mole',
  templateUrl: './mole.component.html',
  styleUrls: ['./mole.component.scss'],
})
export class MoleComponent implements AfterViewInit {
  @ViewChild('gameBoard', { static: false }) gameBoard?: ElementRef;
  @Output() score = new EventEmitter<number>();
  @Output() time: EventEmitter<number> = new EventEmitter<number>();
  @Input() gameLevel: number = 0;
  isVisible = false;
  randomLeft: number = 0;
  randomTop: number = 0;
  intervalId: any;

  getRandomLocation() {
    const imageWidth = 100;
    const imageHeight = 100;

    if (this.gameBoard) {
      const boardElement = this.gameBoard.nativeElement as HTMLElement;
      const boardWidth = boardElement.offsetWidth;
      const boardHeight = boardElement.offsetHeight;

      const maxLeft = boardWidth - imageWidth;
      const maxTop = boardHeight - imageHeight;

      this.randomLeft = this.getRandomCoordinate(maxLeft);
      this.randomTop = this.getRandomCoordinate(maxTop);
    }
  }

  showHideImage() {
    this.getRandomLocation();
    this.isVisible = !this.isVisible;

    setTimeout(() => {
      this.isVisible = !this.isVisible;
    }, this.gameLevel);
  }

  getRandomCoordinate(max: number): number {
    return Math.floor(Math.random() * max);
  }

  hitMole() {
    this.score.emit(environment.SCORE_HIT);
  }

  startGame() {
    this.intervalId = setInterval(() => {
      this.showHideImage();
    }, 2000);
  }
  stopGame() {
    clearInterval(this.intervalId);
  }

  ngAfterViewInit(): void {
    this.getRandomLocation(); // Obtener la ubicación aleatoria inicial después de que la vista se haya inicializado
  }
}
