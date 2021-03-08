import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}
  aller1(){
    this.router.navigateByUrl('/page1');
  }
  aller2(){
    this.router.navigateByUrl('/page4');

  }
  aller3(){
    this.router.navigateByUrl('/page2');

  }
  aller4(){
    this.router.navigateByUrl('/page3');

  }
}
