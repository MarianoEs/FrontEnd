import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { config } from '../data/config/config';
import { IniciarSesionDto } from '../data/config/iniciar-sesionDto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  public IniciarSesion(credentials:IniciarSesionDto) : Observable<Boolean> {
    return this.http.post<Boolean>(config.baseUrl + "iniciarsesion", credentials).pipe(
      tap((response: Boolean) => {
        if (response)
          sessionStorage.setItem("email", "true");
      })
    );
  }

  public logout():void {
    sessionStorage.removeItem("email");
  }

  public isUserLogged():boolean {
    return sessionStorage.getItem("email") !== null;
  }
}
