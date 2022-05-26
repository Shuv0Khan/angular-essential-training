import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponenet } from './media-item-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemListComponenet,
    MediaItemComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
