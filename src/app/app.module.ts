import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material-module';
import { AddcuisinesComponent } from './components/cuisines/addcuisines/addcuisines.component'
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './pages/sign-in/sign-in.component'
import { AuthService } from './services/auth.service'
import { TokenInterceptor } from './services/token.interceptor';
import { ViewCuisinesComponent } from './components/cuisines/view-cuisines/view-cuisines.component';
import { EditCuisinesComponent } from './components/cuisines/editcuisines/editcuisines.component';
import { AddpostComponent } from './components/posts/addpost/addpost.component';
import { EditpostComponent } from './components/posts/editpost/editpost.component';
import { ViewpostsComponent } from './components/posts/viewposts/viewposts.component';
import { PostcardComponent } from './components/posts/postcard/postcard.component'
import { UrlRefineService } from './services/url-refine.service';
import { AddDressComponent } from './components/dresses/add-dress/add-dress.component';
import { EditDressComponent } from './components/dresses/editdress/editdress.component';
import { ViewDressComponent } from './components/dresses/view-dresses/view-dresses.component';
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

@NgModule({
  declarations: [
    AppComponent,
    AddcuisinesComponent,
    SignInComponent,
    ViewCuisinesComponent,
    EditCuisinesComponent,
    AddDressComponent,
    EditDressComponent,
    ViewDressComponent,
    AddpostComponent,
    EditpostComponent,
    ViewpostsComponent,
    PostcardComponent,
    AddviewsComponent,
    EditViewComponent,
    ViewAttractionsComponent,
    CreateAdminComponent,
    ViewAdminsComponent,
    ReviewsComponent,
    AddHotelComponent,
    EditHotelComponent,
    ViewHotelComponent,
    ManageBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    UrlRefineService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
