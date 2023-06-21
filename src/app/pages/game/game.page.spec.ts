import {GamePage} from "./game.page";
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';

describe('GamePage', () => {
  let component: GamePage;
  let fixture: ComponentFixture<GamePage>;
  let translateService: TranslateService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamePage],
      imports: [TranslateModule.forRoot()],
      providers: [{
        provide: Router,
        useValue: jasmine.createSpyObj('Router', ['navigate'])
      }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePage);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('should stop game', () => {
    component.stopGame();
    expect(component.isStarted).toBe(false);
  });

  it('should toggle game', () => {
    component.toggleGame();
    expect(component.isStarted).toBe(true);
  });

  it('should update hit', () => {
    component.updateHit(1);
    expect(component.score).toBe(1);
  });

  it('should present toast', () => {
    component.presentToast('hit', 'top');
    expect(component.hitCount).toBe(0);
  } );

  it('should navigate to home', () => {
    component.stopGame();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  } );

  it('should navigate to home', () => {
    component.startGame();
    expect(router.navigate).not.toHaveBeenCalledWith(['/home']);
  } );

  it('should navigate to home', () => {
    component.toggleGame();
    expect(router.navigate).not.toHaveBeenCalledWith(['/home']);
  } );

  it('should navigate to home', () => {
    component.updateHit(1);
    expect(router.navigate).not.toHaveBeenCalledWith(['/home']);
  } );
})
