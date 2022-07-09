import { Component, OnInit } from '@angular/core';
import { AuthService } from './servicios/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-web';
  isUserLogged: boolean = true;

  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();  
  }


}