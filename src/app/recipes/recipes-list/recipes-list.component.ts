import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      `A test recipe`,
      `This is simply a test`,
      `https://image.shutterstock.com/image-photo/unrecognizable-woman-looking-recipes-cookbook-600w-1959865639.jpg`
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
