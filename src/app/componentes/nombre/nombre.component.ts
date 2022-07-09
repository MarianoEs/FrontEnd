import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    this.router.navigate(['/iniciarsesion']);
  }
}

