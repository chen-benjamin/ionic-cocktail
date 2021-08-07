import { Component } from '@angular/core';
import { Cocktail } from '../model/cocktail.model';
import { CocktailService } from '../service/cocktail.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tests: Cocktail[];
  constructor(private service: CocktailService) {}

}
