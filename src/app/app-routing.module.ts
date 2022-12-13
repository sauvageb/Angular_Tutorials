import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TutorialListComponent} from "./components/tutorial-list/tutorial-list.component";
import {AddTutorialComponent} from "./components/add-tutorial/add-tutorial.component";
import {TutorialDetailsComponent} from "./components/tutorial-details/tutorial-details.component";

const routes: Routes = [
  {path: '', redirectTo: 'tutorials', pathMatch: 'full'},
  {path: 'tutorials', component: TutorialListComponent},
  {path: 'tutorials/details/:id', component: TutorialDetailsComponent},
  {path: 'tutorials/add', component: AddTutorialComponent},
  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
