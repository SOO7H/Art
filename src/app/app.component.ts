import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Art-gallery';

  ngOnInit(){
    if(window.localStorage.getItem('fabs') == null){
      window.localStorage.setItem('fabs',JSON.stringify([]));
    }
  }
}
