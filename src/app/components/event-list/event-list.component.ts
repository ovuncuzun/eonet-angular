import { Component, OnInit } from '@angular/core';
import { EonetService } from 'src/app/services/eonet.service';
import { Events, EonetRoot } from 'src/app/data/entities';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  allEventList: Events[] = [];
  openEventList: Events[] = [];
  closedEventList: Events[] = [];

  constructor(private eonet: EonetService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.eonet.getOpenEvents()
      .subscribe((data: EonetRoot) => {
        this.openEventList = data.events;
      })

    this.eonet.getClosedEvents()
      .subscribe((data: EonetRoot) => {
        this.closedEventList = data.events;
        this.allEventList = [...this.openEventList, ...this.closedEventList]
        this.shuffleEvents(this.allEventList);
      })
  }

  shuffleEvents(events: Events[]) {
    for (let i = events.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let x = events[i];
      events[i] = events[j];
      events[j] = x;
    }
    return events;
  }

}
