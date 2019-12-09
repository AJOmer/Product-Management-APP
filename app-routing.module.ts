import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
{ path: 'products', component: HomeComponent},
{ path: 'edit/:id', component: EditComponent},
{ path: 'products/new', component: AddComponent},
{path: 'reviews/:id', component: ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
