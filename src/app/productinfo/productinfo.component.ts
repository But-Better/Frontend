import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productinfo } from '../model/productinfo';
import { ProductinfoService } from '../service/productinfo.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  productInfoList: Productinfo[] = [];

  constructor(private productInfoService: ProductinfoService, private router: Router) { }

  async ngOnInit() {
    this.productInfoService.findAll().subscribe(data => {
      this.productInfoList = data;
      console.log("fresh productinfoList aquired:");
      //console.log(data);
      console.log(this.productInfoList);
    });
  }

  public async searchForId(searchId: string) {
    console.log('got this from the html input: ' + searchId);
    this.router.navigateByUrl('/foundProdInfo/' + searchId);
  }

  sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

}
