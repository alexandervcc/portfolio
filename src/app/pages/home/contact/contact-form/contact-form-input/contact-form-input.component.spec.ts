import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormInputComponent } from './contact-form-input.component';

describe('ContactFormInputComponent', () => {
  let component: ContactFormInputComponent;
  let fixture: ComponentFixture<ContactFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
