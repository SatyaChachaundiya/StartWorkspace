import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavBarComponent } from './nav/nav.component'
import { EventsAppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.components';
import { EventsThumbnailComponent } from './events/events-thumbnail.components';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.components'
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.sevice'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsThumbnailComponent,
    EventsListComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[
    EventService, 
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('you haven\'t saved your work yet')
  return true
}