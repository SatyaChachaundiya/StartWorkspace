import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Ievent } from './shared/index';

@Component({
    selector: '<events-thumbnail></events-thumbnail>',
    template: `
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date | date:'MM/dd/y'}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: {{event.price | currency:'USD'}}</div>
        <div>
            <span>Location: {{event.location.address}}</span> 
            <span>&nbsp;</span> 
            <span> {{event.location.city}}, {{event.location.country}}</span> 
        </div>
        </div>
    `
})

export class EventsThumbnailComponent{
@Input() event: Ievent

}