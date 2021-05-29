import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.components';
import { EventsThumbnailComponent } from './events/events-thumbnail.components';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsThumbnailComponent,
    EventsListComponent,
    EventDetailsComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
