import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Cocktail } from '../model/cocktail.model';
import { StorageService } from '../service/storage.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  Favorites: Cocktail[] = [];
  constructor(private storage: StorageService, private router: Router) { }

  ngOnInit() {
    this.Favorites = this.storage.getAllCocktails();
  }

  ionViewWillEnter() {
    this.Favorites = this.storage.getAllCocktails();
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
