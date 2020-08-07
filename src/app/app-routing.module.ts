import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard'
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { AddcuisinesComponent } from './components/cuisines/addcuisines/addcuisines.component'
import { ViewCuisinesComponent } from './components/cuisines/view-cuisines/view-cuisines.component'
import { EditCuisinesComponent } from './components/cuisines/editcuisines/editcuisines.component'
import { AddDressComponent } from './components/dresses/add-dress/add-dress.component';
import { ViewDressComponent } from './components/dresses/view-dresses/view-dresses.component';
import { EditDressComponent } from './components/dresses/editdress/editdress.component';
import { AddviewsComponent } from './components/views/addviews/addviewscomponent';
import { EditViewComponent } from './components/views/editview/editviews.component';
import { ViewAttractionsComponent } from './components/views/viewattractions/viewattractions.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
import { ViewAdminsComponent } from './components/view-admins/view-admins.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AddHotelComponent } from './components/hotels/add-hotel/add-hotel.component';
import { ViewHotelComponent } from './components/hotels/view-hotel/view-hotel.component';
import { EditHotelComponent } from './components/hotels/edit-hotel/edithotel.component';
import { ManageBookingsComponent } from './components/manage-bookings/manage-bookings.component';
const routes: Routes = [
  {
    path: 'signin', component: SignInComponent
  },
  {
    path: 'add-cuisine', component: AddcuisinesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'view-cuisines', component: ViewCuisinesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'edit-cuisine/:id', component: EditCuisinesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'add-dress', component: AddDressComponent, canActivate: [AuthGuard]
  },
  {
    path: 'view-dresses', component: ViewDressComponent, canActivate: [AuthGuard]
  },
  {
    path: 'edit-dress/:id', component: EditDressComponent, canActivate: [AuthGuard]
  },
  {
    path: 'add-attraction', component: AddviewsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'view-attractions', component: ViewAttractionsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'edit-attractions/:id', component: EditViewComponent, canActivate: [AuthGuard]
  },
  {
    path: 'create-admin', component: CreateAdminComponent, canActivate: [AuthGuard]
  },
  {
    path: 'view-admins', component: ViewAdminsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'reviews', component: ReviewsComponent, canActivate: [AuthGuard]
  },
  {
    path: '', component: ViewCuisinesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'add-hotel', component: AddHotelComponent , canActivate: [AuthGuard]
  },
  {
    path: 'view-hotels', component: ViewHotelComponent , canActivate: [AuthGuard]
  },
  {
    path: 'edit-hotel/:id', component: EditHotelComponent , canActivate: [AuthGuard]
  },
  {
    path: 'manage-bookings', component: ManageBookingsComponent , canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
