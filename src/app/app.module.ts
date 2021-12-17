import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatearchiveComponent } from './fatearchive/fatearchive.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestingComponent } from './testing/testing.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { SideSideBarComponent } from './side-side-bar/side-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FatearchiveComponent,
    NavbarComponent,
    SidebarComponent,
    TestingComponent,
    BottombarComponent,
    SideSideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
