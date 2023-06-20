import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, ToastController } from '@ionic/angular';
import { MoleComponent } from '../../components/mole/mole.component';
import { GamePage } from './game.page';

describe('GamePage', () => {
  let component: GamePage;
  let fixture: ComponentFixture<GamePage>;
  let moleComponent: MoleComponent | undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamePage, MoleComponent],
      imports: [RouterTestingModule, IonicModule],
      providers: [ToastController]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePage);
    component = fixture.componentInstance;
    moleComponent = fixture.componentInstance.moleComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start the game', () => {
    component.startGame();
    expect(component.isStarted).toBe(true);
    expect(component.time).toBe(component.environment.GAME_TIME);
    expect(setInterval).toHaveBeenCalled();
  });

  it('should stop the game', () => {
    component.stopGame();
    expect(component.isStarted).toBe(false);
    expect(component.time).toBe(component.environment.GAME_TIME);
    expect(clearInterval).toHaveBeenCalled();
    expect(component.score).toBe(0);
  });

  it('should toggle the game', () => {


    // Start the game
    component.toggleGame();
    expect(component.isStarted).toBe(true);
    expect(component.moleComponent?.startGame).toHaveBeenCalled();

    // Stop the game
    component.toggleGame();
    expect(component.isStarted).toBe(false);
    expect(component.moleComponent?.stopGame).toHaveBeenCalled();
  });

  it('should update the score', () => {
    const initialScore = component.score;
    const hit = 10;
    component.updateHit(hit);
    expect(component.score).toBe(initialScore + hit);
  });

  it('should present a toast', async () => {
    const toastController = TestBed.inject(ToastController);
    spyOn(toastController, 'create').and.callThrough();

    const count = 1;
    await component.presentToast(count);

    expect(toastController.create).toHaveBeenCalled();
  });

  it('should change the user', () => {
    spyOn(localStorage, 'removeItem');

    component.changeUser();

    expect(localStorage.removeItem).toHaveBeenCalledWith('sharedData');
  });
});
