import {Component, OnInit} from '@angular/core';
import {AngularFireMessaging} from "@angular/fire/messaging";
import {HttpClient} from "@angular/common/http";
import {Message} from "./models/message";
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'fcm-demo-front';
  messages: Array<Message> = [];

  constructor(private msg: AngularFireMessaging, private http: HttpClient) {}

  ngOnInit()
  {
    this.msg.requestToken.subscribe(token => {

      console.log("test bro")
      console.log(token);
      this.http.post('http://localhost:8081/app/notifications?save=false', {
        target: "c3c89d5b-8cf9-4c50-a45d-f115252f0ca7",
        title: 'hello world',
        body: 'First notification, kinda nervous',
      }).subscribe(() => {  });

    }, error => {

      console.log(error);

    });

    this.msg.onMessage((payload) => {
      // Get the data about the notification
      let notification = payload.notification;
      // Create a Message object and add it to the array
      this.messages.push({title: notification.title, body: notification.body, iconUrl: notification.icon});
    });

  }
}
