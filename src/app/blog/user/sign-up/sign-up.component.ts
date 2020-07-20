import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fadeIn } from '../../../shared/animations/fade-in';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  animations: [fadeIn]
})
export class SignUpComponent implements OnInit {
  public userForm: FormGroup;
  public userInfo: any = {};
  public formErrors = {
    email: '',
    password: '',
    confirmPassword: '',
    formError: '',
    vcode: ''
  };
  validationMessages = {
    email: {
      required: '邮箱必须输入。',
      pattern: '请输入正确的邮箱地址。'
    },
    password: {
      required: '密码必须输入。',
      minlength: '密码至少要8位。'
    },
    confirmPassword: {
      required: '重复密码必须输入。',
      minlength: '密码至少要8位。',
      validateEqual: '两次输入的密码不一致。'
    }
  };

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.userForm = this.fb.group({
      email: [
        this.userInfo.email,
        [
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$')
        ]
      ],
      password: [
        this.userInfo.password,
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ],
      confirmPassword: [
        this.userInfo.confirmPassword,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ]
    });
    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    // tslint:disable-next-line:forin
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  doRegister() {
  }

}
