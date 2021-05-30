import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drink } from '../../models/drink.interface';
import { DrinkList } from '../../models/drink-list.interface';
import { MargaritasService } from '../../services/margaritas.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  margarita: Drink;

  constructor(
    private margaritaService: MargaritasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idDrink = this.activatedRoute.snapshot.paramMap.get('idDrink');

    this.margaritaService.getMargaritaById(idDrink).subscribe((margaritas: DrinkList) => {
      if (!margaritas || !margaritas.drinks.length) {
        return this.router.navigateByUrl('/');
      }

      this.margarita = margaritas.drinks[0];
    });
  }

}
