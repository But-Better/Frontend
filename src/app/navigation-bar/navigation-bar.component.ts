import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alcohol } from '../model/alcohol';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  homename = 'C2H5OH';
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  public searchForId(){
    console.log('got this from the html input: ' + (document.getElementById('alcIdInput')as HTMLInputElement).value);
    this.router.navigateByUrl('/foundAlc/'+(document.getElementById('alcIdInput')as HTMLInputElement).value);
  }

}
