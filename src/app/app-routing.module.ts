import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponentComponent },
  { path: '**', component: HomeComponentComponent },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
