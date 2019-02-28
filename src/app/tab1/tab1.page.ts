import { Component, OnInit } from '@angular/core';

import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  smoothies: Array<any>;

  constructor(private food: FoodService) { }

  ngOnInit() {
    this.smoothies = this.food.smoothies();
  }
}
