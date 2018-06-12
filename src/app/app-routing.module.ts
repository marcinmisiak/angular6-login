import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ZakladkiComponent} from './zakladki/zakladki.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  { path: 'zakladki', component: ZakladkiComponent},
  {
     path: 'logowanie', component: UserComponent,
    children: [{ path: '', component: SignInComponent  }] 
  },
 // { path : '', redirectTo:'/logowanie', pathMatch : 'full'}
];


@NgModule({
  exports: [ RouterModule ], 
  imports: [ RouterModule.forRoot(routes) ],
})


export class AppRoutingModule { }
