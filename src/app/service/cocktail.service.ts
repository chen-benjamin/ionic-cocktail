import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cocktail } from '../model/cocktail.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  searchCocktailByName(name: string) {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name);
  }
}
