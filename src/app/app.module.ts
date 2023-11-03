import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtViewComponent } from './component/art-view/art-view.component';
import { ArtDetailComponent } from './component/art-detail/art-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderFileComponent } from './component/header-file/header-file.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    ArtViewComponent,
    ArtDetailComponent,
    HeaderFileComponent,
    WishlistComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
