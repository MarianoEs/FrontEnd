import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form:FormGroup;
  autenticacionService: any;
  constructor(private formBuilder:FormBuilder, private autenticacion:AutenticacionService, private ruta:Router) { 
      this.form=this.formBuilder.group(
        {
          email:['',[Validators.required, Validators.email]],
          password:['',[Validators.required, Validators.minLength(15)]],
          deviceInfo:this.formBuilder.group({
              notificationToken:['$2a$10$3oFWo8CHik47MbdSUo6dI.tMLZhgpy7OzVvAEZf/u500SSt/rFHim',[Validators.required, Validators.minLength(15)]]

          })
        }
      )
    }

  ngOnInit(): void {
  }
  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  onEnviar(event:Event){
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe((data: any)=>{
      console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(['/porfolio/']);
    })
  }
}
