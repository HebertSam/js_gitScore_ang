import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { GitService } from './git.service';

import { AppComponent } from './app.component';
import { GitScoreComponent } from './git-score/git-score.component';

@NgModule({
  declarations: [
    AppComponent,
    GitScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
