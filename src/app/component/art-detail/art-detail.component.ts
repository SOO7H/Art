import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { Art } from '../art-view/art-workmodel';

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css']
})
export class ArtDetailComponent implements OnInit{
  g : string | any;
  artdata : Art[] | any;
  showadd : boolean = true;
  showremove : boolean = false; 
  constructor(private api : ApiService , private activatedroute : ActivatedRoute  ){}
  ngOnInit(): void {
   let artid = this.activatedroute.snapshot.paramMap.get('artid');
   artid && this.api.getArtworksId(artid).subscribe( (res)=>{
    this.artdata = res;
    console.log(res);
    let a:any=document.getElementById('aaa');
    a.innerHTML=this.artdata?.data.description;
   } )
  }
  addtowishlist(id:string){
    this.api.store(id)
  }
  // removefromwishlist(){
  //   this.showadd = true;
  //   this.showremove = false;
  // }
}
