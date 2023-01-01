import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactForm, FormState } from 'src/app/model/ContactForm';
import { ResContactDto } from 'src/app/model/ResContactDto';
import { HttpServiceService } from 'src/app/services/http/http-service.service';

@Component({
  selector: 'app-contact-form-input',
  templateUrl: './contact-form-input.component.html',
  styleUrls: ['./contact-form-input.component.css'],
})
export class ContactFormInputComponent {
  feedback: ResContactDto = { code: 0, message: 'xd' };
  formStates = FormState;
  sendingForm: FormState = FormState.notSent;

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(private http: HttpServiceService) {}

  submitContactForm = async () => {
    if (this.contactForm.invalid) {
      return;
    }
    const bodyReq = this.contactForm.value as ContactForm;
    this.sendingForm = FormState.loading;
    this.http.sendContactForm(bodyReq).subscribe({
      next: (resp) => {
        this.feedback.code = resp.status;
        this.feedback.message = resp.body?.message!!;
        console.log('next: ', this.feedback);
        this.sendingForm = FormState.result;
      },
      error: (err) => {
        this.feedback.code = err.status;
        this.feedback.message = err.error.message;
        console.log('err: ', err);
        this.sendingForm = FormState.result;
      },
    });
  };
}
