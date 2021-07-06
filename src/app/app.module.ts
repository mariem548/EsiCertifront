import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RegisterComponent } from './register/register.component';
import { HomeclientComponent } from './homeclient/homeclient.component';



@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AcceuilComponent,
    RegisterComponent,
    HomeclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
