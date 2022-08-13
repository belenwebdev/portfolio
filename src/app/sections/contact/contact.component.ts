import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  showCat : boolean = true;
  contactForm = this.formBuilder.group({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    message: new FormControl('',Validators.required),
  });

  constructor(private emailService: EmailService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  sendEmail(){
    if(!this.contactForm.valid) return;
    this.emailService.sendEmail(this.contactForm.value).subscribe(
      (res) => {
        Swal.fire({
          icon: 'success',
          title: 'Message sent!',
          text: 'Thanks a lot! I will get back to you as soon as I can',
        })
      },
      (err) => {
        console.log('error sending form', err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          html: 'Something went wrong! Please try again later or email me directly to <a href="mailto:belencarriondev@gmail.com">belencarriondev@gmail.com</a>',
        })
      }
    );
  }

}
