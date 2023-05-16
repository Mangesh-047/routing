import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { EditProductComponent } from './shared/components/products/edit-product/edit-product.component';
import { EditUserComponent } from './shared/components/users/edit-user/edit-user.component';
import { AuthGaurd } from './shared/services/auth.guard';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: DashboardComponent },
  {
    path: 'users', component: UsersComponent,
    // canActivate: [AuthGaurd],
    canActivateChild: [AuthGaurd],

    children: [
      { path: ':userId', component: UserComponent },
      { path: ':userId/edit', component: EditUserComponent },
    ]
  },
  // { path: 'users/:userId', component: UserComponent },
  // { path: 'users/:userId/edit', component: EditUserComponent },
  {
    path: 'products', component: ProductsComponent,
    // canActivate: [AuthGaurd],
    canActivateChild: [AuthGaurd],
    children: [
      { path: ':productId', component: ProductComponent },
      { path: ':productId/edit', component: EditProductComponent }
    ]
  },
  // { path: 'products/:productId', component: ProductComponent },
  // { path: 'products/:productId/edit', component: EditProductComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
