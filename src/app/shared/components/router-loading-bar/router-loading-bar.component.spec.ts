import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLoadingBarComponent } from './router-loading-bar.component';

describe('RouterLoadingBarComponent', () => {
  let component: RouterLoadingBarComponent;
  let fixture: ComponentFixture<RouterLoadingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterLoadingBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterLoadingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
