import { Component, OnInit, HostListener, Inject, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/common';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    public location: Location,
    @Inject(DOCUMENT) document
  ) {}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      var element = document.getElementById('navbar-top');
      if (element) {
        element.classList.remove('navbar-transparent');
        element.classList.add('bg-danger');
      }
    } else {
      var element = document.getElementById('navbar-top');
      if (element) {
        element.classList.add('navbar-transparent');
        element.classList.remove('bg-danger');
      }
    }
  }
  ngOnInit() {

    firebase.initializeApp({
      apiKey: 'AIzaSyDxjNR-EWabTe4bXW-wXBi2sNdkh8zS9UM',
      authDomain: 'learned-hour-239017.firebaseapp.com'
    });

    this.onWindowScroll(event);
  }
}
