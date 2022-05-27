import { RouterModule, Routes } from "@angular/router";
import { MediaItemFormComponent } from "./media-item-form.component";
import { MediaItemListComponenet } from "./media-item-list.component";

const appRoutes: Routes = [
  {path: 'add', component: MediaItemFormComponent},
  {path: ':medium', component: MediaItemListComponenet},
  {path: '', redirectTo: 'all', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);
