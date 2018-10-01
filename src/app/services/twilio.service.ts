import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Capability, Client, RestClient } from 'twilio';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
declare const Twilio: any;

@Injectable({
  providedIn: 'root'
})

export class TwilioService {
  private loggedItem = new BehaviorSubject<string>('Loading');
  logged$ = this.loggedItem.asObservable();
  
  private inProgress = new BehaviorSubject<boolean>(false);
  inProgress$ = this.inProgress.asObservable();
  inprogress = false;

  constructor(private http: HttpClient) { }

  setup(): Observable<any> {
    return this.http.get('https://iceberg-camel-2736.twil.io/capability-token')
      .pipe(
        tap ((data: any) => {
          this.addEventHandlers(data);
        }),
        catchError( this.handleError('Failure to load token') )
      );
  }

  addEventHandlers(data) {
    Twilio.Device.setup(data.token);

    Twilio.Device.ready( (device) => {
      this.log('Ready! Set up your mic.');
    });

    Twilio.Device.error((error) => {
      this.log('Error: ' + error.message);
    });

    Twilio.Device.connect( (conn) => {
      this.log('Call established. You should hear ringing.');
      this.inProgress.next(true);
      this.inprogress = true;
    });

    Twilio.Device.disconnect( (conn) => {
      this.log('Call ended.  Ready!');
      this.inProgress.next(false);
      this.inprogress = false;      
    });

    Twilio.Device.incoming( (conn) => {
      this.inProgress.next(true);
      this.inprogress = true;
      this.log('Incoming connection from ' + conn.parameters.From);
      conn.accept();
    });
  }

  call() {
    if(this.inprogress) {
      Twilio.Device.disconnectAll();
    } else {
      var params = {
        To: '4253678895' //Can hide in Twiml App if necessary.
      };
      Twilio.Device.connect(params);
    }
  }

  log(message: string)  {
    console.log(message);
    this.loggedItem.next(message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
