/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Cocktail } from '../model/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async saveCocktail(cocktail: Cocktail) {
    if (!cocktail.id) {
      cocktail.id = Date.now().toString();
    }
    await this._storage?.set(cocktail.id, cocktail);
  }

  public async getCocktail(id: string) {
    return await this._storage.get(id);
  }

  public getAllCocktails() {
    const list: Cocktail[] = [];
    if (this._storage !== null) {
      this._storage.forEach((value, key, index) => {
        list.push(value);
      });
    }
    return list;
  }

  public async removeCocktail(id: string) {
    return await this._storage.remove(id);
  }
}
