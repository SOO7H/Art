import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Art } from './art-workmodel';
import {FormBuilder , FormGroup} from '@angular/forms'
import {faInfo, faHeart} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-art-view',
  templateUrl: './art-view.component.html',
  styleUrls: ['./art-view.component.css']
})
export class ArtViewComponent implements OnInit{
  faInfo=faInfo;
  faHeart=faHeart;
  data : Art[] | any;
  constructor(private api:ApiService, private _fb : FormBuilder){}
  formData !: FormGroup ;
  ngOnInit(): void {
    this.formData = this._fb.group({
      searchFilter : "",
    })
    this.displayArt()
    this.formData.valueChanges.subscribe((value) => {
      this.getCollection(value.searchFilter)
    })

  }

  getCollection(filterBy : string){
    this.api.getDatabyFilter(filterBy).subscribe({
        next : item =>{
            this.data = item,
            console.log(this.data)
        }
    })
  }

  displayArt(){
    this.api.getArtworks().subscribe(res => {
      this.data = res;
    })
  }

  getProByPg(pg:number)
  {
    this.api.getArtworksPage(pg).subscribe(res => {
      this.data = res;
      console.log(res);
    })
  }
  getNextPage()
  {
    this.api.getNextPage().subscribe(res => {
      this.data = res;
      console.log(res);
    })
  }
  getPrevPage()
  {
    this.api.getPrevpage().subscribe(res =>{
      this.data = res;
      console.log(res);
    })
  }

  addtowishlist(id:string){
    this.api.store(id)
  }

  removeFromWishlist(id: string){
    this.api.remove(id);
  }
}
