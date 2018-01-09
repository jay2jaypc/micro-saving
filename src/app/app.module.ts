import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { IntroComponent } from './pages/intro/intro.component';
import { Intro2Component } from './pages/intro-2/intro-2.component';
import { ApproachComponent } from './pages/approach/approach.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { CompleteComponent } from './pages/complete/complete.component';
import { TeaserComponent } from './pages/teaser/teaser.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    Intro2Component,
    ApproachComponent,
    ConfirmComponent,
    CompleteComponent,
    TeaserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'intro',
        component: IntroComponent
      },
      { path: 'intro-2',
        component: Intro2Component
      },
      { path: 'approach',
        component: ApproachComponent
      },
      {
        path: 'confirm',
        component: ConfirmComponent
      },
      {
        path: 'complete',
        component: CompleteComponent
      },
      {
        path: 'teaser',
        component: TeaserComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
