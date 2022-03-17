import { Component, OnInit } from '@angular/core';
import { Alcohol } from '../model/alcohol';

@Component({
  selector: 'app-alc-shop',
  templateUrl: './alc-shop.component.html',
  styleUrls: ['./alc-shop.component.css']
})
export class AlcShopComponent implements OnInit {

  alcoholList: Alcohol[] = [
    {id: '1234', type: 'Bier', name: 'Zwickl', price: 1.50, alcPercentage: 5.0, amount: 100, rating: 'three', ageRestriction: 16, fairtrade: true, bio: false, countryOfOrigin: 'Germany'},
    {id: '12345', type: 'Wein', name: 'Der gute Rote', price: 5.50, alcPercentage: 15.0, amount: 25, rating: 'five', ageRestriction: 16, fairtrade: true, bio: true, countryOfOrigin: 'Germany'}
];

  constructor() { }

  ngOnInit(): void {
  }

}
