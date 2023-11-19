import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSplashComponent } from './welcome-splash.component';

describe('WelcomeSplashComponent', () => {
  let component: WelcomeSplashComponent;
  let fixture: ComponentFixture<WelcomeSplashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeSplashComponent]
    });
    fixture = TestBed.createComponent(WelcomeSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
