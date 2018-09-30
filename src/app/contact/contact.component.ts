import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TwilioService } from '../services/twilio.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  showEmail = false;
  showPhoneMessage = false;
  status: string;
  statusSubscription: Subscription;
  inProgress: boolean;
  inProgressSubscription: Subscription;

  constructor(private twilio: TwilioService) { }

  ngOnInit() {
    this.twilio.setup().subscribe( () => {
    });

    this.statusSubscription = this.twilio.logged$.subscribe( message => this.status = message);
    
    this.statusSubscription = this.twilio.inProgress$.subscribe( inProgress => this.inProgress = inProgress);
  }

  ngOnDestroy() {
    this.statusSubscription.unsubscribe();
  }

  call() {
    this.twilio.call();
  }

  showMeEmail() {
    this.showEmail = !this.showEmail;
  }

  showMePhoneMessage(show: boolean) {
    this.showPhoneMessage = show;
  }
}
