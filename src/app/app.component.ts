import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Emails = [
	  {email: 'eatass69@yahoo.com', importance: true, subject:'Human Resources', content:'Tone it down on please'},
	  {email: 'amherst13@aol.com', importance: false, subject: 'the block', content:'the block needs you'},
	  {email: 'harberd@harderd.edu', importance: true, subject:'Application', content:'We regret to inform you'},
	  {email: 'Devry@DevryUni.edu', importance: false, subject: 'Application', content:'Congrajulations'}
  ]
}
