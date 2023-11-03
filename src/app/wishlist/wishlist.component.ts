import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { faInfo, faTimes } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  faInfo = faInfo;
  faTimes = faTimes
  public arr: any;
  constructor(public api: ApiService) {
    console.log(localStorage.getItem('fabs'));
  }
  ids = [];
  ngOnInit(): void {
    this.ids = JSON.parse(localStorage.getItem('fabs')!);
    this.getCollection(this.ids.toString());
    // this.ids=this.ids.slice(0,this.ids.length-1);
    // console.log(this.str);
    // this.getCollection(this.str);
  }
  getCollection(filterBy: string) {
    if (filterBy != "") {
      this.api.getArtworksId(filterBy).subscribe(
        data => {
          console.log(data['data']);
          this.arr = data['data'] || [];
        }
      )
    }
    else {
      this.arr = [];
    }
  }
  removeFromWishlist(id: string) {
    console.log(id);
    this.api.remove(id);
    this.ids = JSON.parse(localStorage.getItem('fabs')!);
    this.getCollection(this.ids.toString());
    //window.location.reload();
  }

}
