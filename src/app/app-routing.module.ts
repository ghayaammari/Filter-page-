import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductredirectpageComponent } from './RedirectFilterpageComponents/productredirectpage/productredirectpage.component';
import { FilterComponent } from './Filter/filter/filter.component';

const routes: Routes = [
  {
    path: 'filter',component: FilterComponent
  },
  { path: '', redirectTo: 'filter', pathMatch: 'full' },
  { path: 'produit/:id', component: ProductredirectpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
