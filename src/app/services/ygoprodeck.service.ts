import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YgoprodeckService {
  private apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  
  constructor(private http: HttpClient) { }

  // observar todas las cartas
  getAllCards(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  // buscar cartas con filtros especificos
  searchCards(query: string): Observable<any> {
    return this.http.get<any>("`${this.apiUrl}?${query}`")
  }
}
