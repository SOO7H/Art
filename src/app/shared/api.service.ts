import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Art, Artwork } from '../component/art-view/art-workmodel';
import { ArtworkList } from '../component/art-view/art-viewmodel';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // httpClient!: HttpClient;


  currentPage = 1;
  searchByfilter = "https://api.artic.edu/api/v1/artworks/search?q=";
  constructor(private http: HttpClient) {
    let userFab = localStorage.getItem('fabs');
    if (userFab != null) {
      this.wishitemlist = JSON.parse(userFab);
    } else {
      localStorage.setItem('fabs', JSON.stringify([]));
    }
  }
  public getArtworks(): Observable<any> {
    return this.http.get<any>('https://api.artic.edu/api/v1/artworks');
  }

  public getArtworksId(id: string): Observable<Artwork> {
    return this.http.get<any>('https://api.artic.edu/api/v1/artworks/?ids=' + id);
  }

  public getArtworksPage(page: number): Observable<ArtworkList> {
    this.currentPage = page;
    return this.http.get<any>('https://api.artic.edu/api/v1/artworks?page=' + page);
  }
  public getNextPage() {
    this.currentPage++;
    return this.http.get<any>('https://api.artic.edu/api/v1/artworks?page=' + this.currentPage);
  }

  public getPrevpage() {
    if (this.currentPage > 1) {
      this.currentPage--
    }
    else {
      this.currentPage = this.currentPage;
    }
    return this.http.get<any>('https://api.artic.edu/api/v1/artworks?page=' + this.currentPage);
  }

  public getDatabyFilter(filter: string): Observable<any> {
    const temp = this.http.get<any>(this.searchByfilter + filter + "&fields=id,image_id,title,artist_display,date_display,main_reference_number").pipe(

    );
    return temp;
  }
  wishitemlist: string = ""
  public store(id: string) {
    let wishlist = JSON.parse(window.localStorage.getItem("fabs")!);
    wishlist.push(id);
    window.localStorage.setItem("fabs", JSON.stringify(wishlist));
  }

  public remove(id: string) {
    let wishlist = JSON.parse(window.localStorage.getItem("fabs")!);
    console.log(wishlist);


    wishlist = wishlist.filter((data: any) => {
      console.log(data, id);
      return data !== id
    });
    window.localStorage.setItem("fabs", JSON.stringify(wishlist));
    console.log(JSON.stringify(wishlist))

  }
  // arts(){
  //   return this.artlistarray.asObservable()
  // }


}
