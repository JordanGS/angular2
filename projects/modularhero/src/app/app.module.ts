import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // NgModel lives here
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroModalContent, HeroModalComponent } from './hero-modal/hero-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroModalContent,
    HeroModalComponent
  ],
  entryComponents: [ HeroModalContent ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
