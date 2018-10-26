import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { CategoryContentComponent } from './category-content/category-content.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';


@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    VideoContentComponent,
    CategoryContentComponent,
    SidebarContentComponent,
    NavbarContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
