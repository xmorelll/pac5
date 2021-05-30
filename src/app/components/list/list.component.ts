import { Component, OnInit } from '@angular/core';
import { MargaritasService } from '../../services/margaritas.service';
import {DrinkList} from '../../models/drink-list.interface';
import {Drink} from '../../models/drink.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  margaritas: Drink[] = [];

  constructor(private margaritasService: MargaritasService) { }

  ngOnInit(): void {
    this.margaritasService
      .getAllMargaritas()
      .subscribe((margaritas: DrinkList) => this.margaritas = margaritas.drinks);
  }
}
