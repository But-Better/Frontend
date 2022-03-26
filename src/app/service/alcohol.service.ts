import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alcohol } from '../model/alcohol';
import { Observable } from 'rxjs/internal/Observable';
import { PostAlcohol } from '../model/postAlc';
//import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AlcoholService {

  private alcoholsUrl!: string;
  private deleteStatus='';

  constructor(private http: HttpClient) {
    this.alcoholsUrl = 'http://localhost:9090/v1/application/alcohol';
  }

  public findAll(): Observable<Alcohol[]> {
    return this.http.get<Alcohol[]>(this.alcoholsUrl);
  }

  public findByID(id: String): Observable<Alcohol>{
    console.log("start get request for this id: " +id);
    return this.http.get<Alcohol>(this.alcoholsUrl+'/'+id);
  }

  public save(alcohol: Alcohol) {
    return this.http.post<Alcohol>(this.alcoholsUrl, alcohol);
  }

  public deleteByID(id: String):string{
    this.http.delete(this.alcoholsUrl+'/'+id)
        .subscribe({
            next: data => {
                this.deleteStatus = 'Delete successful';
            },
            error: error => {
              this.deleteStatus = 'Ups something went wrong there buddy';
                console.error('There was an error!', error);
            }
        });
    return this.deleteStatus;
  }

  public deleteAll():string{
    this.http.delete(this.alcoholsUrl)
        .subscribe({
            next: data => {
                this.deleteStatus = 'Delete all successful';
            },
            error: error => {
              this.deleteStatus = 'Ups something went wrong there buddy';
                console.error('There was an error!', error);
            }
        });
    return this.deleteStatus;
  }
}
