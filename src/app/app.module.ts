import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WolfListComponent } from './wolf-list/wolf-list.component';
import { PackListComponent } from './pack-list/pack-list.component';
import { PackMapComponent } from './pack-map/pack-map.component';

@NgModule({
  declarations: [
    AppComponent,
    WolfListComponent,
    PackListComponent,
    PackMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
