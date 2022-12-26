import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactForm } from 'src/app/model/ContactForm';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ResContactDto } from 'src/app/model/ResContactDto';

@Component({
  selector: 'app-contact-form-input',
  templateUrl: './contact-form-input.component.html',
  styleUrls: ['./contact-form-input.component.css']
})
export class ContactFormInputComponent {
  feedback: ResContactDto = {};

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

    this.http.sendContactForm(bodyReq).subscribe({
      next: (resp) => {
        console.log(resp.body);
        this.feedback.code = resp.status;
        this.feedback.message = resp.body?.message;
      },
      error: (err) => {
        console.log(err);
        this.feedback.code = err.status;
        this.feedback.message = err.error.error;
      },
    });
  };
}
