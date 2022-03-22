import { Component, OnInit } from '@angular/core';
import { Alcohol } from '../model/alcohol';
import { AlcoholService } from '../service/alcohol.service';

@Component({
  selector: 'app-alc-shop',
  templateUrl: './alc-shop.component.html',
  styleUrls: ['./alc-shop.component.css']
})
export class AlcShopComponent implements OnInit {

  alcoholList: Alcohol[] = [
    //{uuid: '1234', alcoholBeverageType: 'Bier', name: 'Zwickl', price: 1.50, percentage: 5.0, amount: 100, productRatingEnum: 'three', ageOfRestrictions: 16, fairTrade: true, bio: false, countryOfOrigin: 'Germany'},
    //{uuid: '12345', alcoholBeverageType: 'Wein', name: 'Der gute Rote', price: 5.50, percentage: 15.0, amount: 25, productRatingEnum: 'five', ageOfRestrictions: 16, fairTrade: true, bio: true, countryOfOrigin: 'Germany'}
];

  deleteStatus = '';

  constructor(private alcoholService: AlcoholService) { }

  ngOnInit(): void {
    console.log(this.alcoholService.findAll());
    this.alcoholService.findAll().subscribe(data => {
      this.alcoholList = data;
    });
  }

  deleteAlc(id:string){
    console.log('got this from the html input to delete:' + id);
    this.deleteStatus = this.alcoholService.deleteByID(id);
    this.alcoholService.findAll().subscribe(data => {
      this.alcoholList = data;
    });
    window.location.reload();
  }

  deleteAllAlc(){
    console.log('delete all alcohols');
    this.alcoholService.deleteAll();
    this.alcoholService.findAll().subscribe(data => {
      this.alcoholList = data;
    });
    window.location.reload();
  }

  
}
