import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { BackgroundComponent } from './background/background.component';
import { ProjectsComponent } from './projects/projects.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { VideoBackgroundDirective } from './directives/video-background.directive';
import { RoutingModule } from './routing/routing.module';
import { ProjectmodalComponent } from './projects/projectmodal/projectmodal.component';
import { VideoProjectmodalDirective } from './directives/video-projectmodal.directive';
import { TimerPipe } from './pipes/timer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactComponent,
    BackgroundComponent,
    ProjectsComponent,
    PagenotfoundComponent,
    VideoBackgroundDirective,
    ProjectmodalComponent,
    VideoProjectmodalDirective,
    TimerPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule, //import HttpClientModule after BrowserModule.
    RoutingModule

  ],
  exports: [ VideoProjectmodalDirective],
  providers: [VideoProjectmodalDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
