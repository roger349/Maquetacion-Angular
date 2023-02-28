import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginuserComponent } from './ComponentesMaquetacion/loginuser/loginuser.component';

const routes: Routes = [
  {path: 'loginuser', component: LoginuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
