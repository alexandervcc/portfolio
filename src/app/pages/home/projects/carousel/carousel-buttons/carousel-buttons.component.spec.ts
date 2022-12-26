import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselButtonsComponent } from './carousel-buttons.component';

describe('CarouselButtonsComponent', () => {
  let component: CarouselButtonsComponent;
  let fixture: ComponentFixture<CarouselButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
