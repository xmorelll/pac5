import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {DrinkList} from '../models/drink-list.interface';

@Injectable({
  providedIn: 'root'
})
export class MargaritasService {
  constructor(private http: HttpClient) { }

  // https://www.thecocktaildb.com/api.php
  getAllMargaritas(): Observable<DrinkList> {
    return this.http.get<DrinkList>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
  }

  getMargaritaById(idDrink: string): Observable<DrinkList> {
    return this.http.get<DrinkList>('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + idDrink);
  }
}
