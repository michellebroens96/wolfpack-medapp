import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WolfListComponent } from './components/wolf-list/wolf-list.component';
import { PackListComponent } from './components/pack-list/pack-list.component';
import { PackMapComponent } from './components/pack-map/pack-map.component';

@NgModule({
  declarations: [
    AppComponent,
    WolfListComponent,
    PackListComponent,
    PackMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
