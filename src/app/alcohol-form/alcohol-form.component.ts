import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alcohol } from '../model/alcohol';
import { PostAlcohol } from '../model/postAlc';
import { AlcoholService } from '../service/alcohol.service';


@Component({
  selector: 'app-alcohol-form',
  templateUrl: './alcohol-form.component.html',
  styleUrls: ['./alcohol-form.component.css']
})
export class AlcoholFormComponent {

  alcohol: PostAlcohol;

  constructor( private route: ActivatedRoute, 
    private router: Router, 
      private alcoholService: AlcoholService) { 
        this.alcohol = new PostAlcohol();
      }

  onSubmit() {
    //this.gotoAlcoholShop();
    console.log(this.alcohol);
    this.alcoholService.save(this.alcohol).subscribe(result => this.gotoAlcoholShop());
  }

  gotoAlcoholShop(){
    this.router.navigate(['/shop']);
  }

}
