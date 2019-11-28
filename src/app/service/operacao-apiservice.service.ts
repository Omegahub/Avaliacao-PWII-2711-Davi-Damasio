import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs';
import { Potencia } from '../model/potencia';

@Injectable({
  providedIn: 'root'
})
export class OperacaoAPIServiceService {

  apiURL: string = "http://172.16.58.22:8001/api/swagger-ui.html";

  constructor( private htttpClient: HttpClient) { }


  handleError(error){
    let errorMessage = `Código de erro: ${error.status}\nMenssagem: ${error.message}`;
    alert(errorMessage);
    return throwError(errorMessage);
  }
  postPotencia(potencia: Potencia): Observable<string> {
    return this.htttpClient.post<string>(this.apiURL, potencia)
                           .pipe(retry(1),
                               catchError(this.handleError));
  }
}

