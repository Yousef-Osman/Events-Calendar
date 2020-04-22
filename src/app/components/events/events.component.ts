import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ToastrService } from 'src/app/services/toastr.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events:any[];

  constructor(private eventService: EventService, private toastr:ToastrService) { 
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();

  }

  startToastr(eventName){
    this.toastr.success(eventName);
  }
}
