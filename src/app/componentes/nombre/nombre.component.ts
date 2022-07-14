import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {
  isUserLogged!: boolean;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
  }
  onLogOut(): void {
    this.authService.logOut();
    window.location.reload();
  }

  iniciarSesion(){
    this.router.navigate(['/iniciarsesion']);
  }
}

