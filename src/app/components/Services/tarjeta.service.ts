import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {



    // constructor() { }
  private myApiUrl = 'https://localhost:7234/'; // tu backend .NET
  private endpoint = 'api/Tarjeta';

  constructor(private http: HttpClient) {}

  getListTarjetas(): Observable<any> {
    // return this.http.get(`${this.baseUrl}/usuarios`);
    // return this.http.get(this.myApiUrl + this.myApiUrl)

    return this.http.get(`${this.myApiUrl}${this.endpoint}`);

    // return this.http.get(this.myApiUrl + this.endpoint);
  }

  // crearUsuario(data: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/usuarios`, data);
  // }

}
