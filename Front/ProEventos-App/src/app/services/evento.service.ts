import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';
import {take} from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable(
  // { providedIn: 'root' }
)
export class EventoService {
  baseUrl = environment.apiURL + 'api/eventos';
  // tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI0IiwidW5pcXVlX25hbWUiOiJ0ZXN0ZTEiLCJuYmYiOjE2NzQ1MjM3OTMsImV4cCI6MTY3NDYxMDE5MywiaWF0IjoxNjc0NTIzNzkzfQ.Zc1_Y5ih7JyKJjfNw0ikVwZOgWRQnLoc7yFQoAVH2x4DQrG5fpE2IgIY5hICsSNgM48oe2cyGEsLcAFn-GiEhA'}) - , { headers: this.tokenHeader }

  constructor(private http: HttpClient) { }

  public getEventos(): Observable<Evento[]> {
    return this.http
               .get<Evento[]>(this.baseUrl)
               .pipe(take(1));
  }

  public getEventosByTema(tema: string): Observable<Evento[]> {
    return this.http
               .get<Evento[]>(`${this.baseUrl}/${tema}/tema`)
               .pipe(take(1));
  }

  public getEventoById(id: number): Observable<Evento> {
    return this.http
               .get<Evento>(`${this.baseUrl}/${id}`)
               .pipe(take(1));
  }

  public post(evento: Evento): Observable<Evento> {
    return this.http
               .post<Evento>(this.baseUrl, evento)
               .pipe(take(1));
  }

  public put(evento: Evento): Observable<Evento> {
    return this.http
               .put<Evento>(`${this.baseUrl}/${evento.id}`, evento)
               .pipe(take(1));
  }

  public deleteEvento(id: number): Observable<any> {
    return this.http
               .delete(`${this.baseUrl}/${id}`)
               .pipe(take(1));
  }

  postUpload(eventoId: number, file: File): Observable<Evento> {
    const fileToUpload = file[0] as File;
    const formData = new FormData();
    formData.append('file', fileToUpload);
    return this.http
               .post<Evento>(`${this.baseUrl}/upload-image/${eventoId}`, formData)
               .pipe(take(1));
  }
}
