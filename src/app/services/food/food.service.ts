import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  smoothies(): Array<any> {
    return [
      {
        name: 'Dreamsicle',
        ingredients: [
          { name: 'orange', selected: false },
          { name: 'banana', selected: false },
          { name: 'mango', selected: false },
          { name: 'coconut milk', selected: false }
        ]
      },
      {
        name: 'Green Machine',
        ingredients: [
          { name: 'kale', selected: false },
          { name: 'spinach', selected: false },
          { name: 'mango', selected: false },
          { name: 'pineapple', selected: false },
          { name: 'apple juice', selected: false }
        ]
      },
      {
        name: 'Dr Roots',
        ingredients: [
          { name: 'carrot', selected: false },
          { name: 'beet', selected: false },
          { name: 'ginger', selected: false },
          { name: 'parsnip', selected: false },
          { name: 'turnip', selected: false }
        ]
      },
      {
        name: 'Orange Jubelee',
        ingredients: [
          { name: 'orange', selected: false },
          { name: 'banana', selected: false }
        ]
      },
      {
        name: 'um, wut?',
        ingredients: [
          { name: 'broccoli', selected: false },
          { name: 'rutabaga', selected: false },
          { name: 'pickled herring', selected: false },
          { name: 'cabbage', selected: false },
          { name: 'watermelon', selected: false }
        ]
      },
      {
        name: 'Tropical Paradise',
        ingredients: [
          { name: 'pineapple', selected: false },
          { name: 'banana', selected: false },
          { name: 'mango', selected: false },
          { name: 'star fruit', selected: false },
          { name: 'coconut milk', selected: false }
        ]
      },
      {
        name: 'Citrus Punch',
        ingredients: [
          { name: 'orange', selected: false },
          { name: 'grapefruit', selected: false },
          { name: 'lemon', selected: false },
          { name: 'lime', selected: false },
          { name: 'tangerine', selected: false }
        ]
      },
      {
        name: 'Berry Blossom',
        ingredients: [
          { name: 'cherries', selected: false },
          { name: 'strawberries', selected: false },
          { name: 'blue berries', selected: false },
          { name: 'raspberries', selected: false },
          { name: 'blackberries', selected: false },
          { name: 'currants', selected: false }
        ]
      },
      {
        name: 'Hot Stuff',
        ingredients: [
          { name: 'orange', selected: false },
          { name: 'lime', selected: false },
          { name: 'jalapeno', selected: false },
          { name: 'blackberries', selected: false }
        ]
      },
      {
        name: 'Passion Punch',
        ingredients: [
          { name: 'grape', selected: false },
          { name: 'mango', selected: false },
          { name: 'passion fruit', selected: false },
          { name: 'apple juice', selected: false }
        ]
      }
    ];
  }
}
