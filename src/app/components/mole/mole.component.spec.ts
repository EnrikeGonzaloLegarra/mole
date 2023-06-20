import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { MoleComponent } from './mole.component';

describe('MoleComponent', () => {
  let component: MoleComponent;
  let fixture: ComponentFixture<MoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoleComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should show and hide image', () => {
    component.getRandomLocation();
    component.showHideImage();
    expect(component.isVisible).toBe(true);
    setTimeout(() => {
      expect(component.isVisible).toBe(false);
    }, component.gameLevel);
  });

  it('should get random coordinate', () => {
    const max = 100;
    const coordinate = component.getRandomCoordinate(max);
    expect(coordinate).toBeGreaterThanOrEqual(0);
    expect(coordinate).toBeLessThan(max);
  });

  it('should emit score on hitMole()', () => {
    spyOn(component.score, 'emit');
    component.hitMole();
    expect(component.score.emit).toHaveBeenCalled();
  });

  it('should start and stop the game', () => {
    spyOn(window, 'setInterval');
    spyOn(window, 'clearInterval');

    component.startGame();
    expect(window.setInterval).toHaveBeenCalled();

    component.stopGame();
    expect(window.clearInterval).toHaveBeenCalled();
  });

  it('should get random location after view init', () => {
    spyOn(component, 'getRandomLocation');
    component.ngAfterViewInit();
    expect(component.getRandomLocation).toHaveBeenCalled();
  });
});
