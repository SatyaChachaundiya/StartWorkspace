import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavBarComponent } from './nav/nav.component'
import { EventsAppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { Error404Component } from './error/404.component';

import { 
  EventDetailsComponent,
  EventsListComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  EventsThumbnailComponent,
  EventService
} from './events/index'; // barrels (making index files at directory levels and exporting every file of the directory there)
import { AuthService } from './user/auth.service';


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
    EventListResolver,
    AuthService,
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