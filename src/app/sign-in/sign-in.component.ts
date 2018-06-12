import { Component, OnInit } from '@angular/core';
import { AUTH_TOKEN, authToken } from '../app.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
   
    if(localStorage.getItem(AUTH_TOKEN)) {
      
      this.router.navigate(['/']);
    }

  }



}
