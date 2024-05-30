import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environtment';
import { FestivoDTO } from '../../core/entidades/FestivoDTO';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseDTO } from '../../core/entidades/ResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {


  url: string;
  constructor(private http: HttpClient) {

    this.url = `${environment.urlBase}festivos/`;
  }

  public listar(year: number): Observable<FestivoDTO[]> {
    return this.http.get<FestivoDTO[]>(`${this.url}listar/${year}`);
  }

  public getFestitivo(year: number, month: number, day: number,) : Observable<ResponseDTO> {
    return this.http.get<ResponseDTO>(`${this.url}verificar/${year}/${month}/${day}`)
  }
}
