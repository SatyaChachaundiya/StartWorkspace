import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Ievent, EventService } from '../shared/index';

@Component({
    templateUrl:'./event-details.component.html',
    styles:[`
        .container {padding-left:20px; padding-right:20px;}
        .event-name {height:100px;}
    `]
})

export class EventDetailsComponent {
    event:Ievent

    constructor(private eventService: EventService, private route: ActivatedRoute){

    }

    ngOnInit(){
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }
}