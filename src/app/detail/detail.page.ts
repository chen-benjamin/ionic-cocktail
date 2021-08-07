import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Cocktail } from '../model/cocktail.model';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  cocktail: Cocktail;
  isExist = false;
  constructor(private storage: StorageService, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {
      this.cocktail = this.router.getCurrentNavigation().extras.state.cocktail;
    }
  }

  async ionViewWillEnter() {
    if (this.cocktail) {
      await this.storage.getCocktail(this.cocktail.id).then(res => {
        this.isExist = res !== null;
      });
    }
  }

  async addFavorite() {
    this.storage.saveCocktail(this.cocktail);
    const alert = await this.alertController.create({
      message: 'Cocktail <strong>saved</strong>!!!',
      buttons: [{
          text: 'Okay',
          handler: () => {
            this.isExist = true;
          }
        }]
    });

    await alert.present();
  }

  editFavorite() {
    const navigationExtras: NavigationExtras = {
      state: {
        cocktail: this.cocktail
      }
    };
    this.router.navigate(['item'], navigationExtras);
  }

  async deleteFavorite() {
    this.storage.removeCocktail(this.cocktail.id);
    const alert = await this.alertController.create({
      message: 'Cocktail <strong>deleted</strong>!!!',
      buttons: [{
          text: 'Okay',
          handler: () => {
            this.isExist = false;
          }
        }]
    });

    await alert.present();
  }

}
