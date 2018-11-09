import { Component, OnInit } from '@angular/core';
import {Recipe} from 'src/app/recipes/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[] = [
    new  Recipe('butter chicken', 'https://therecipecritic.com/wp-content/uploads/2017/12/PataksButterChicken11.jpg',
    'it is yummy')
  ];
  constructor() { }

  ngOnInit() {
  }

}
