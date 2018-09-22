import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { BackgroundComponent } from './background/background.component';
import { ProjectsComponent } from './projects/projects.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { VideoBackgroundDirective } from './directives/video-background.directive';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactComponent,
    BackgroundComponent,
    ProjectsComponent,
    PagenotfoundComponent,
    VideoBackgroundDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
