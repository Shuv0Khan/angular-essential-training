import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponenet } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form.component';
// import { MediaItemService } from './media-item.service';
import { lookupListToken, lookupList } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    MediaItemListComponenet,
    MediaItemComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    {provide: lookupListToken, useValue: lookupList},
    {provide: HttpXhrBackend, useClass: MockXHRBackend}
  //   MediaItemService
  ]
})
export class AppModule {}
