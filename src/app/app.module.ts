import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'users',      component: UsersComponent },
  {
    path: '**',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [AppComponent, ProductsComponent, UsersComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
