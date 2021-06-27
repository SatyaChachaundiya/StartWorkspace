import { Component, Input, OnChanges } from '@angular/core'
import { Isession } from '../shared/index';

@Component({
    selector:'<session-list></session-list>',
    templateUrl:'./session-list.component.html',
    // styles:[`
    //     .container {padding-left:20px; padding-right:20px;}
    //     .event-name {height:100px;}
    // `]
})

export class SessionListComponent implements OnChanges {
    @Input() Session:Isession[]
    @Input() filterBy:string
    @Input() sortBy:string

    visibleSession: Isession[] = [];
    
    ngOnChanges(){
        if(this.Session){
            this.filterSessions(this.filterBy)
            this.sortBy === 'name' ? this.visibleSession.sort(sortByNameAsc) : this.visibleSession.sort(sortByVotesDesc)
        }
    }

    filterSessions(filter){
        if(filter==='all'){
            this.visibleSession = this.Session.slice(0);
        }else{
            this.visibleSession = this.Session.filter(session => {
                return session.level.toLocaleLowerCase() === filter
            })
        }
    }


}

function sortByNameAsc(s1: Isession, s2: Isession){
    if(s1.name > s2.name) return 1
    else if(s1.name === s2.name) return 0
    else return -1
}

function sortByVotesDesc(s1: Isession, s2: Isession){
    return s2.voters.length - s1.voters.length
}