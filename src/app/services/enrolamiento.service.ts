import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrolamientoService {

  constructor(private _httpClient: HttpClient) { }

  getInformacionCurpCorreo(curp: string, correo: string): Observable<any> {
      return this._httpClient.get<any>("http://dummy.restapiexample.com/api/v1/employees");
  }

  verificarVigencia(): Observable<any>{
    return this._httpClient.get<any>("http://dummy.restapiexample.com/api/v1/employees");
  }

  verificarPension(): Observable<any>{
    return this._httpClient.get<any>("http://dummy.restapiexample.com/api/v1/employees");
  }

  validaToken(curp: string, token: string): Observable<any> {
    return this._httpClient.get<any>("http://dummy.restapiexample.com/api/v1/employees");
  }
}
