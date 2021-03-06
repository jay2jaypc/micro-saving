import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  url;
  constructor(private _router: Router) {
    this.url = _router.url;  // to print only path eg:"/login"
  }

  ngOnInit() {
    console.log('inside init');
    this._router.navigate(['/teaser']);
  }

  getNextPage(event){
    console.log(event);
    console.log(this.url);
    switch (this.url){
      case '/':
        this.url = '/teaser';
        console.log('INSIDE CASE');
        this._router.navigate(['/intro-2']);
        break;

      case '/intro-2':
        this.url = '/approach';
        console.log('INSIDE CASE');
        this._router.navigate(['/approach']);
        break;


      case '/approach':
        this.url = '/confirm';
        console.log('INSIDE CASE');
        this._router.navigate(['/confirm']);
        break;

      case '/confirm':
        this.url = '/complete';
        console.log('INSIDE CASE');
        this._router.navigate(['/complete']);
        break;

    }

  }

}
