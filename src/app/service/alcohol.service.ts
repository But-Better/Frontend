import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alcohol } from '../model/alcohol';
import { Observable } from 'rxjs/internal/Observable';
//import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AlcoholService {

  private alcoholsUrl!: string;

  constructor(private http: HttpClient) {
    this.alcoholsUrl = 'http://localhost:8080/v1/product';
  }

  public findAll(): Observable<Alcohol[]> {
    return this.http.get<Alcohol[]>(this.alcoholsUrl);
  }

  public save(alcohol: Alcohol) {
    return this.http.post<Alcohol>(this.alcoholsUrl, alcohol);
  }
}
