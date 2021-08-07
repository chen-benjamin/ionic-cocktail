import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cocktail } from '../model/cocktail.model';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  id: string;
  name: string;
  img: string;
  instructions: string;
  constructor(private storage: StorageService, private router: Router) { }

  ngOnInit() {
    if (this.router.getCurrentNavigation().extras.state) {
      const cocktail = this.router.getCurrentNavigation().extras.state.cocktail;
      this.id = cocktail.id;
      this.name = cocktail.name;
      this.img = cocktail.img;
      this.instructions = cocktail.instructions;
    }
  }

  onSubmit(form: NgForm){
    if (form.valid){
      this.storage.saveCocktail(new Cocktail(this.id || null, this.name, this.img, this.instructions));
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this.id ? this.router.navigate(['/favorites']) : this.router.navigate(['/home']);
    }
  }

}
