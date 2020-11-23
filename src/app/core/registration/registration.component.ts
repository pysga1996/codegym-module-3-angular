import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {MockedUsersService} from '../../service/mocked-users.service';

function comparePassword(c: AbstractControl): { passwordnotmatch: boolean } {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  message: string;
  error: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService,
              private mockedUsersService: MockedUsersService) {
  }

  ngOnInit(): void {
    this.authService.logout(false);
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }, {validator: comparePassword}),
      country: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]]
    });

    // update form state
    this.registerForm.patchValue({
      email: 'info@example.com'
    });
  }

  onSubmit(): void {
    console.log('submit');
    if (this.registerForm.valid) {
      const user = {...this.registerForm.value};
      user.password = this.registerForm.value.pwGroup.password;
      delete user.pwGroup;
      if (this.mockedUsersService.getUser(user.email)) {
        this.message = 'User existed!';
        this.error = true;
        console.log('existed');
      } else {
        this.mockedUsersService.addUser(user);
        this.error = false;
        this.message = 'Successfully registered!';
        console.log('added');
      }
    } else {
      this.error = true;
      this.message = 'Form is invalid!';
      console.log('invalid');
    }
  }
}
