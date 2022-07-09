import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent implements OnInit {
  //usuario: string = "";
  //password: string = "";
  formLogin: FormGroup;
  loginError: Boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formLogin = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(15)]]
      }
    );
  }

  ngOnInit(): void {
  }

  onEnviar=(event: Event) =>{
    event.preventDefault;

    this.authService.IniciarSesion(this.formLogin.value).subscribe(
      (response: Boolean) => {
        if (response)
          this.router.navigate(['/home']);

        else
          this.loginError = true;
      }
    )
  }

  get Email() {
    return this.formLogin.get('email');
  }

  get Password() {
    return this.formLogin.get('password');
  }

}
