import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.css']
})
export class TeaserComponent implements OnInit {

  url;
  constructor(private _router: Router) {
    console.log("INSIDE INIT - TEASER");
    this.url = _router.url;  // to print only path eg:"/login"
  }

  ngOnInit() {
  }

  getNextPage(){
    console.log("INSIDE NEXT PAGE - TEASER");
    switch (this.url){
      case '/':
        this.url = '/teaser';
        console.log('INSIDE CASE');
        this._router.navigate(['/teaser']);
        break;

      case '/teaser':
        this.url = '/intro';
        console.log('INSIDE CASE');
        this._router.navigate(['/intro']);
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
