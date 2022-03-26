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

  constructor(private alcoholService: AlcoholService) { }

  async ngOnInit() {
    this.alcoholService.findAll().subscribe(data => {
      this.alcoholList = data;
      console.log("fresh alcohollist aquired:");
      console.log(data);
    });
  }

  async deleteAlc(id: string) {
    console.log('got this from the html input to delete:' + id);
    console.log(this.alcoholService.deleteByID(id));
    await this.sleep(150);
    this.alcoholService.findAll().subscribe(data => {
      this.alcoholList = data;
      console.log("fresh alcohollist aquired:");
      console.log(data);
    });
  }

  async deleteAllAlc() {
    console.log('delete all alcohols');
    console.log(this.alcoholService.deleteAll());
    await this.sleep(200);
    this.alcoholService.findAll().subscribe(data => {
      this.alcoholList = data;
      console.log("fresh alcohollist aquired:");
      console.log(data);
    });
  }

  sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }


}
