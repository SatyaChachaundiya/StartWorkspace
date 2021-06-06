import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    // selector: 'events-list', // since routing directly to it, we don't need thid selector anymorw
    template:`
        <div>
        <h1>Upcoming Angular events</h1>
        <hr/>
        <div *ngFor="let event of events" class="col-md-5">
        <events-thumbnail [event]="event"></events-thumbnail>
        </div>
        </div>
    `
})
export class EventsListComponent{
    events:any[]

    constructor(private eventService: EventService, private route:ActivatedRoute){
        
    }

    ngOnInit(){
        this.events = this.route.snapshot.data['events']
    }
        

}