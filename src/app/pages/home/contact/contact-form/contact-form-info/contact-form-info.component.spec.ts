import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormInfoComponent } from './contact-form-info.component';

describe('ContactFormInfoComponent', () => {
  let component: ContactFormInfoComponent;
  let fixture: ComponentFixture<ContactFormInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
