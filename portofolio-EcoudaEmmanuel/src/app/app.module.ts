import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WINDOW_PROVIDERS } from './service/window.service';
import { ProjectCssComponent } from './project-css/project-css.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { Routes, RouterModule  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GlassesShopComponent } from './glasses-shop/glasses-shop.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projectHtmlCss', component: ProjectCssComponent },
  { path: 'projectHtmlCss/HelloWorld', component: HelloworldComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ProjectCssComponent,
    HelloworldComponent,
    HomeComponent,
    GlassesShopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
