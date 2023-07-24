import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WolfListComponent } from './components/wolf-list/wolf-list.component';
import { PackListComponent } from './components/pack-list/pack-list.component';
import { PackMapComponent } from './components/pack-map/pack-map.component';

const routes: Routes = [
  { path: 'wolves', component: WolfListComponent },
  { path: 'packs', component: PackListComponent },
  { path: 'packs/map', component: PackMapComponent },
  { path: '', redirectTo: 'wolves', pathMatch: 'full' },
  { path: '**', redirectTo: 'wolves', pathMatch: 'full' }, // Handle invalid routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
