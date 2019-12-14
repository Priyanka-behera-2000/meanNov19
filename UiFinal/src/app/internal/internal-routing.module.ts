import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SentComponent } from './sent/sent.component';

const routes: Routes = [
  {path: '', component: DashboardComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'avatar', component: AvatarComponent},
      {path: 'sent', component: SentComponent}
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
