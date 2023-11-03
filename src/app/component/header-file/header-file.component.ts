import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-file',
  templateUrl: './header-file.component.html',
  styleUrls: ['./header-file.component.css']
})
export class HeaderFileComponent implements OnInit{
  public wishlistItems : number = 0;
  ngOnInit(): void {
    
  }

}
