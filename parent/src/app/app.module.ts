import { LazyElementsModule } from '@angular-extensions/elements';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildWrapperModule } from './webcomponents/child-wrapper/child-wrapper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LazyElementsModule,
    ChildWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
