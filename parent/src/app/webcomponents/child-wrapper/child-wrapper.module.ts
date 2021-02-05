import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildWrapperComponent } from './child-wrapper.component';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  declarations: [ChildWrapperComponent],
  imports: [
    CommonModule,
    LazyElementsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ChildWrapperComponent]
})
export class ChildWrapperModule { }
