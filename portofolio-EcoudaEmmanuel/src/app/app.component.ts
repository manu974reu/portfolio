import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ScrollNavBar } from './service/srollNavbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'portofolio-EcoudaEmmanuel';
  public href: string ;
  url: string ;
  constructor(private router: Router, scroll: ScrollNavBar) {
    scroll.scrollNavbar('navbar', 0, '0px',
      'navbar navbar-expand-lg navbar-light bg-transparent', 570, '0px',
      'navbar navbar-expand-lg navbar-light bg-light', 700, '-250px',
      'navbar navbar-expand-lg navbar-light bg-transparent ', 950, '-250px');
  }
  ngOnInit() {
    this.href = this.router.url;
  }
  show() {
    if (this.router.url === '/') {
      return true;
    }

  }
}




