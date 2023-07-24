import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pack } from 'src/models/pack.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class PackService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer 9bAqXRPplyiGfF6n81NVUGpAqeLI1QHw46aqICVL1BLaGI6'
    })
  };

  constructor(private http: HttpClient) {}

  getPacks(): Observable<Pack[]> {
    return this.http.get<Pack[]>(`${environment.apiUrl}/packs`, this.httpOptions);
  }

  getPack(id: number): Observable<Pack> {
    return this.http.get<Pack>(`${environment.apiUrl}/packs/${id}`, this.httpOptions);
  }

  addPack(pack: Pack): Observable<Pack> {
    return this.http.post<Pack>(`${environment.apiUrl}/packs`, pack, this.httpOptions);
  }

  updatePack(pack: Pack): Observable<Pack> {
    return this.http.put<Pack>(`${environment.apiUrl}/packs/${pack.id}`, pack, this.httpOptions);
  }

  removePack(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/packs/${id}`, this.httpOptions);
  }

  addWolfToPack(packId: number, wolf_Id: number): Observable<Pack> {
    return this.http.post<Pack>(`${environment.apiUrl}/packs/${packId}/wolf/${wolf_Id}`, null, this.httpOptions);
  }

  removeWolfFromPack(packId: number, wolf_Id: number): Observable<Pack> {
    return this.http.delete<Pack>(`${environment.apiUrl}/packs/${packId}/wolf/${wolf_Id}`, this.httpOptions);
  }
}
