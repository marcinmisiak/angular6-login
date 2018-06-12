import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule } from '@angular/material';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { ZakladkiComponent } from './zakladki/zakladki.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {  FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ZakladkiComponent,
    UserComponent,
    SignInComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    AppRoutingModule,
   
    FormsModule,
    HttpClientModule

  ],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG, 
    useClass: HammerGestureConfig
  }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
 
 }


 
