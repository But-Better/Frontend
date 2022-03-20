import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../service/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  priceVat!:number;

  constructor(private calculatorService:CalculatorService) { 
  }

  ngOnInit(): void {
  }

  calculatePriceWithVat(){
    console.log('got this as price input: ' + (document.getElementById('priceRaw')as HTMLInputElement).value);
    console.log('got this as percent input: ' + (document.getElementById('percent')as HTMLInputElement).value);

    this.calculatorService.calculatePriceWithVAT(Number((document.getElementById('priceRaw')as HTMLInputElement).value),Number((document.getElementById('percent')as HTMLInputElement).value)).subscribe(data => this.priceVat = data);
    console.log('calculator result: ' + this.priceVat);
  }

}
