import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizationModule } from './authorization/authorization.module';
import { AuthorizationComponent } from './authorization/authorization.component';

import { ListOfUsersModule } from './list-of-users/list-of-users.module';
import { ListOfUsersComponent } from './list-of-users/list-of-users.component';

import { EditingUserModule } from './editing-user/editing-user.module';
import { EditingUserComponent } from './editing-user/editing-user.component';

// определение маршрутов
const routes: Routes = [
  { path: '', component: AuthorizationModule },
  { path: 'list', component: ListOfUsersModule },
  { path: 'edit', component: EditingUserModule },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
  ],
  imports: [
    AuthorizationModule,
    ListOfUsersModule,
    EditingUserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
