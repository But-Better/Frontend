import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private calculatorUrl = 'http://localhost:9090/v1/application/VAT';
  private calcUrlParam1 = '?price=';
  private calcUrlParam2 = '&percent=';

  constructor(private http: HttpClient) { }


  public calculatePriceWithVAT(price: number, percent: number) {
    return this.http.get<number>(this.buildCalcUrl(price, percent));
  }

  private buildCalcUrl(price: number, percent: number) {
    return this.calculatorUrl + this.calcUrlParam1 + price + this.calcUrlParam2 + percent;
  }

}
