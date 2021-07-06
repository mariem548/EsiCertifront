import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeclientComponent } from './homeclient/homeclient.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', redirectTo: 'acceuil',pathMatch:'full'},

  {path:'acceuil', component:AcceuilComponent},
  {path:'connexion', component: ConnexionComponent},
  {path:'register', component: RegisterComponent},
  {path:'homeclient', component: HomeclientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
