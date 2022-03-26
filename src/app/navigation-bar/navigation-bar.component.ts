import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alcohol } from '../model/alcohol';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlcoholService } from '../service/alcohol.service';

@Component({
  selector: 'navbar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  homename = 'C2H5OH';

  constructor(private router: Router, private alcoholService: AlcoholService) { }

  ngOnInit(): void {

  }

  public async searchForId(searchId: string) {
    console.log('got this from the html input: ' + searchId);

    this.router.navigateByUrl('/foundAlc/' + searchId);

    await this.sleep(100);
    window.location.reload();
  }

  sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }


}
