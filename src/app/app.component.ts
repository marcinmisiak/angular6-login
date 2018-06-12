import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Szkoła jazdy';

    
 
}
export const  AUTH_TOKEN = 'authToken';
export let authToken = localStorage.getItem(AUTH_TOKEN);
