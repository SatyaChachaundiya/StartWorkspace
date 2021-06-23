import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Ievent, EventService, Isession } from '../shared/index';

@Component({
    templateUrl:'./event-details.component.html',
    styles:[`
        .container {padding-left:20px; padding-right:20px;}
        .event-name {height:100px;}
        a {cursor:pointer}
    `]
})

export class EventDetailsComponent {
    event:Ievent
    addmode:Boolean

    constructor(private eventService: EventService, private route: ActivatedRoute){

    }

    ngOnInit(){
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }

    addSession(){
        this.addmode = true
    }

    saveNewSession(session:Isession){
        const nextId = Math.max.apply(null,this.event.sessions.map(m => m.id));
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addmode = false
    }

    cancelAddSession(){
        this.addmode = false
    }
}