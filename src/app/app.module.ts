import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventsComponent } from './components/events/events.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { EventService } from './services/event.service';
import { ToastrService } from './services/toastr.service';
import { NewEventComponent } from './components/new-event/new-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    HomeComponent,
    NotFoundComponent,
    NewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    EventService,
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
