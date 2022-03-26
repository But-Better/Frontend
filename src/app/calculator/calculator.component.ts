import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../service/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  priceInput!: number;
  vatInput!: number;
  priceVat!: number;

  constructor(private calculatorService: CalculatorService) {
  }

  ngOnInit(): void {
  }

  calculatePriceWithVat() {

    this.priceInput = Number((document.getElementById('priceRaw') as HTMLInputElement).value);
    this.vatInput = Number((document.getElementById('percent') as HTMLInputElement).value);

    console.log('got this as price input: ' + this.priceInput);
    console.log('got this as percent input: ' + this.vatInput);

    this.calculatorService.calculatePriceWithVAT(this.priceInput, this.vatInput).subscribe(data => this.priceVat = data);
    console.log('calculator result: ' + this.priceVat);
  }

}
