import { Component, OnInit } from '@angular/core';
import { Productinfo } from '../model/productinfo';
import { Router } from '@angular/router';
import { ProductinfoService } from '../service/productinfo.service';
import { Address } from '../model/address';
import { DeliveryTime } from '../model/deliveryTime';

@Component({
  selector: 'app-prod-info-form',
  templateUrl: './prod-info-form.component.html',
  styleUrls: ['./prod-info-form.component.css']
})
export class ProdInfoFormComponent {

  prodInfo: Productinfo;
  prodInfoAddress: Address;
  prodInfoDeliveryTime: DeliveryTime;

  constructor(
    private router: Router, 
      private prodInfoService: ProductinfoService) { 
        this.prodInfo = new Productinfo();
        this.prodInfoAddress = new Address();
        this.prodInfoDeliveryTime = new DeliveryTime();
      }

      onSubmit() {
        this.prodInfo.address = this.prodInfoAddress;
        this.prodInfo.deliveryTime = this.prodInfoDeliveryTime.toString();

        console.log("Got this as new productInfo:" + JSON.stringify({ data: this.prodInfo}, null, 4));

        this.prodInfoService.save(this.prodInfo).subscribe(result => this.goToProdInfos());
      }
    
      goToProdInfos(){
        this.router.navigate(['/prodInfo']);
      }

}
