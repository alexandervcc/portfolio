import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnWorkingPageComponent } from './on-working-page.component';

describe('OnWorkingPageComponent', () => {
  let component: OnWorkingPageComponent;
  let fixture: ComponentFixture<OnWorkingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnWorkingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnWorkingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
