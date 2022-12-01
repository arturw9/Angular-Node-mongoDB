import { UserService } from './../../service/user.service';
import { LoginModel } from './../../models/LoginModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginobj: LoginModel = new LoginModel;
  loginForm!: FormGroup;

  constructor
    (
      private formbuilder: FormBuilder,
      private router: Router,
      public userService: UserService
    ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group(
      {
        nome: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]],
        telefone: ['', [Validators.required]]
      }
    );
  }

  submitLogin()
  {
    const formValue = this.loginForm.value

    var dadosLogin = this.loginForm.getRawValue() as LoginModel;

    this.userService.postUser(formValue).subscribe(
      token =>{

        var nossoToken = token
      },
      erro => {

      }
    )
    this.router.navigate([`/investimentos`]);
  }

}
