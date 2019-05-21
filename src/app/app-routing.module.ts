import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CribListingComponent } from './crib-listing/crib-listing.component';

const routes: Routes = [{ path: 'listing', component: CribListingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
