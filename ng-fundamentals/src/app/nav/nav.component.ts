import { Component } from '@angular/core';
import { EventService, Isession } from '../events/';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styles: [
   ` li > a.active { color : #F97924;}
   `
  ]
})
export class NavBarComponent {
  searchTerm: string="";
  foundSessions: Isession[];

  constructor(public auth:AuthService, private eventService: EventService){

  }
  searchSessions(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
      this.foundSessions = sessions
      }
    )
    console.log(this.foundSessions);
    
  }
}
