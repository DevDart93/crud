import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  error_messages = {
    'email':[
      { type: 'required', message:'Campo correo es requerido'},
      { type: 'minlength', message:'La longitud del correo electrónico debe ser superior o igual a 6 caracteres.'},
      { type: 'maxlength', message: 'La longitud del correo electrónico debe ser inferior o igual a 50 caracteres.'},
      { type: 'pattern', message:'Por favor, introduce una dirección de correo electrónico válida.'},
    ],
    'password':[
      { type: 'required', message:'Campo contraseña es requerido'},
      { type: 'minlength', message:'La longitud de la contraseña debe ser mayor o igual a 6 caracteres'},
      { type: 'maxlength', message:'La longitud de la contraseña debe ser menor o igual a 10 caracteres'},
      { type: 'pattern', message:'La contraseña debe contener números, mayúsculas y minúsculas'},
    ],

  }

  constructor( public formBuilder: FormBuilder, private router: Router) { 

    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-Z0-9-.]+$')
      ]))
    });

  }

  ngOnInit() {
  }

  redirectToHome() {
    this.router.navigateByUrl('/home');
  }

}
