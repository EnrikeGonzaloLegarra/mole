import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let translateService: TranslateService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [TranslateModule.forRoot()],
      providers: [
        {
          provide: Router,
          useValue: jasmine.createSpyObj('Router', ['navigate'])
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change language', () => {
    spyOn(translateService, 'use');
    const event = { detail: { value: 'es' } };

    component.changeLanguage(event);

    expect(translateService.use).toHaveBeenCalledWith('es');
  });

  it('should login and navigate to game page', () => {
    spyOn(localStorage, 'setItem');
    const navigateSpy = router.navigate as jasmine.Spy;
    navigateSpy.calls.reset();

    component.user = 'Enrike Gonzalo';
    component.login();

    expect(localStorage.setItem).toHaveBeenCalledWith('sharedData', 'Enrike Gonzalo');
    expect(navigateSpy).toHaveBeenCalledWith(['/game']);
  });
});
