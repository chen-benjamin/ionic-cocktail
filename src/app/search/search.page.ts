/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Cocktail } from '../model/cocktail.model';
import { CocktailService } from '../service/cocktail.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  cocktails: Cocktail[] = [];
  searchText: string;

  constructor(private service: CocktailService, private router: Router) { }

  ngOnInit() {
    this.searchText = '';
  }

  search() {
    if (this.searchText === '') {
      return;
    }
    this.cocktails = [];
    this.service.searchCocktailByName(this.searchText).subscribe(res => {
      this.cocktails = res['drinks'] ?
        res['drinks'].map(d => new Cocktail(d.idDrink, d.strDrink, d.strDrinkThumb, d.strInstructions)) :
        null;
    });
  }

  onItemClick(cocktail: Cocktail) {
    const navigationExtras: NavigationExtras = {
      state: {
        cocktail
      }
    };
    this.router.navigate(['detail'], navigationExtras);
  }

}
