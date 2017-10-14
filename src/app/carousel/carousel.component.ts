import { Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent{
  pecanImg = 'assets/images/pecan_cupcakes.jpg';
  bbqBurgerImg = 'assets/images/bacon_bbq_burger.jpg';
  banofeeImg = 'assets/images/banofee_pie.jpg';
  constructor(config: NgbCarouselConfig) {
    // customize carousel
    config.interval = 4000;
  }

}
