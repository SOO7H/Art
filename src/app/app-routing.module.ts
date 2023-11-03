import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtViewComponent } from './component/art-view/art-view.component';
import { ArtDetailComponent } from './component/art-detail/art-detail.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'art-view', component: ArtViewComponent },
  { path: 'art-detail/:artid', component: ArtDetailComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
