import { WINDOW } from 'src/app/service/window.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'portofolio-EcoudaEmmanuel';

  constructor(@Inject(WINDOW) private window: Window) {
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        document.getElementById('navbar').style.top = '0px';
        document.getElementById('navbar').classList.value = 'navbar navbar-expand-lg navbar-light bg-transparent';
      } else if (window.pageYOffset > 570) {
          document.getElementById('navbar').style.top = '';
        document.getElementById('navbar').classList.value = 'navbar navbar-expand-lg navbar-light bg-light';
      } else if (window.pageYOffset < 700) {
        document.getElementById('navbar').style.top = ' -100px';
        document.getElementById('navbar').classList.value = 'navbar navbar-expand-lg navbar-light bg-transparent ';
      }
    };
  }

}




