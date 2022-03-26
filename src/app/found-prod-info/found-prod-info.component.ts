import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../model/address';
import { Productinfo } from '../model/productinfo';
import { ProductinfoService } from '../service/productinfo.service';

@Component({
  selector: 'app-found-prod-info',
  templateUrl: './found-prod-info.component.html',
  styleUrls: ['./found-prod-info.component.css']
})
export class FoundProdInfoComponent implements OnInit {

  foundProdInfo: Productinfo = new Productinfo();
  searchId!: string;
  errorMessage: string = '';

  constructor(private productInfoService:ProductinfoService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.searchId = String(this.route.snapshot.paramMap.get('id'));
      console.log('search id aus link: ' + this.searchId);

      this.productInfoService.findById(this.searchId).subscribe(value => {
        this.foundProdInfo = value;
        console.log("fresh foundProdInfo aquired:");
        console.log(value);});
  }

  async searchForId(id:string){
    this.router.navigateByUrl('/foundProdInfo/'+id);

    this.productInfoService.findById(id).subscribe(value => {

      if(value == null){
        this.foundProdInfo = new Productinfo();
        this.foundProdInfo.address = new Address();

        this.errorMessage = 'Id could not be found';
      }
      else{
        this.foundProdInfo = value;
        this.errorMessage = '';
        console.log("fresh foundProdInfo aquired:");
        console.log(this.foundProdInfo);
      }
    });
  }

}
