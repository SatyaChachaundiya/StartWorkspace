import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: '<events-thumbnail></events-thumbnail>',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span> 
            <span>&nbsp;</span> 
            <span> {{event.location.city}}, {{event.location.country}}</span> 
        </div>
        </div>
    `
})

export class EventsThumbnailComponent{
@Input() event: any

}