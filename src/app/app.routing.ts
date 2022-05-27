import { RouterModule, Routes } from "@angular/router";
import { MediaItemListComponenet } from "./media-item-list.component";

const appRoutes: Routes = [
  {
    path: 'add',
    loadChildren: () => import('./new-item/new-item.module').then(m => m.NewItemModule)
  },
  {path: ':medium', component: MediaItemListComponenet},
  {path: '', redirectTo: 'all', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(appRoutes);
