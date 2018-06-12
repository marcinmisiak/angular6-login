import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { AppComponent, AUTH_TOKEN } from '../app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = new User();
  isLoginError : boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem(AUTH_TOKEN)) {
      this.router.navigate(['/']);
    }
  }

  OnSubmit(login: string, password: string) {
   
    this.user.login = login;
    this.user.password = password;
    this.userService.userAuth(this.user).subscribe(
      (data:any) =>  {
        console.log(data);
        if( data) {
        localStorage.setItem(AUTH_TOKEN, data.accessToken);
          if(localStorage.getItem(AUTH_TOKEN)) {
            this.router.navigate(['/']);
          }
        } else {
          this.isLoginError = true;
        }
     //   this.router.navigate(['/']);
      },
       (err: HttpErrorResponse) => {
      this.isLoginError = true;
    }
    );
  }
}
