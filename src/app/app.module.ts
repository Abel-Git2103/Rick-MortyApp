import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BarranavComponent } from './barranav/barranav.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { HttpClientModule } from '@angular/common/http';
import { TarjetadetailsComponent } from './tarjetadetails/tarjetadetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BarranavComponent,
    TarjetaComponent,
    TarjetadetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
