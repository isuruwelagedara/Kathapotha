import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {



  slideOpts = {
    autoplay:true,
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 1.3,
    slidesPerView: 2.2,
    // freeMode: true,
    loop: true,
  };

  constructor( private router: Router ) {}


  StoresBook(){

    this.router.navigate(['all-stores/']);

  }

}
