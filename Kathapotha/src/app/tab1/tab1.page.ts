import { Component } from '@angular/core';


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

  constructor() {}

}
