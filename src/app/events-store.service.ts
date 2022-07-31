import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsStoreService {

  @Output() hackathonsUpdated: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
}
