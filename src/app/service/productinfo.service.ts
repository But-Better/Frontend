import { Injectable } from '@angular/core';
import { Productinfo } from '../model/productinfo';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductinfoService {

  private productURL = 'http://localhost:9090/v1/application/productinformation';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Productinfo[]> {
    return this.http.get<Productinfo[]>(this.productURL);
  }

  public findById(id:string): Observable<Productinfo>{
    console.log("start get request for this id: " +id);
    return this.http.get<Productinfo>(this.productURL + "/" + id);
  }

  public save(productinfo: Productinfo){
    console.log("start post for this productinfo:" + productinfo);
    return this.http.post<Productinfo>(this.productURL,productinfo);
  }
}
