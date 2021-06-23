import { Component, Input } from '@angular/core'
import { Isession } from '../shared/index';

@Component({
    selector:'<session-list></session-list>',
    templateUrl:'./session-list.component.html',
    // styles:[`
    //     .container {padding-left:20px; padding-right:20px;}
    //     .event-name {height:100px;}
    // `]
})

export class SessionListComponent {
@Input() Session:Isession[]

}