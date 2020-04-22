import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { EventsComponent } from './components/events/events.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NewEventComponent } from './components/new-event/new-event.component';

const routes: Routes = [
  { path: 'events/new', component: NewEventComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }