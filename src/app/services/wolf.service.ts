import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wolf } from 'src/models/wolf.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WolfService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer 9bAqXRPplyiGfF6n81NVUGpAqeLI1QHw46aqICVL1BLaGI6'
    })
  };

  constructor(private http: HttpClient) { }

  getWolves(): Observable<Wolf[]> {
    return this.http.get<Wolf[]>(`${environment.apiUrl}/wolves`, this.httpOptions);
  }

  getWolfById(wolfId: number): Observable<Wolf> {
    return this.http.get<Wolf>(`${environment.apiUrl}/${wolfId}`, this.httpOptions);
  }

  addWolf(wolf: Wolf): Observable<Wolf> {
    return this.http.post<Wolf>(`${environment.apiUrl}/wolves`, wolf, this.httpOptions);
  }

  updateWolf(wolf: Wolf): Observable<Wolf> {
    return this.http.put<Wolf>(`${environment.apiUrl}/wolves/${wolf.id}`, wolf, this.httpOptions);
  }

  removeWolf(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/wolves/${id}`, this.httpOptions);
  }
}
