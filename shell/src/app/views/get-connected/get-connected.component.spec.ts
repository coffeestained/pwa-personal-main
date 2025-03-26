import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConnectedComponent } from './get-connected.component';

describe('GetConnectedComponent', () => {
  let component: GetConnectedComponent;
  let fixture: ComponentFixture<GetConnectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetConnectedComponent]
    });
    fixture = TestBed.createComponent(GetConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
