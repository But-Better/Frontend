import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alcohol } from '../model/alcohol';
import { AlcoholService } from '../service/alcohol.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-found-alc',
  templateUrl: './found-alc.component.html',
  styleUrls: ['./found-alc.component.css']
})
export class FoundAlcComponent implements OnInit {

  foundAlc!: Alcohol;
  searchId!: string;

  constructor(private alcoholService: AlcoholService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.searchId = String(this.route.snapshot.paramMap.get('id'));
    console.log('search id aus link: ' + this.searchId);

    this.alcoholService.findByID(this.searchId).subscribe(value => {
      this.foundAlc = value;
      console.log("fresh foundAlcohol aquired:");
      console.log(value);
    });

  }

}
