import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'margarita/:idDrink', component: ItemComponent},
  {path: '**', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
