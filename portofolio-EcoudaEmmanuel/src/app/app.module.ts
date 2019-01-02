import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WINDOW_PROVIDERS } from './service/window.service';
import { ProjectCssComponent } from './project-css/project-css.component';
import { HelloworldComponent } from './helloworld/helloworld.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectCssComponent,
    HelloworldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
