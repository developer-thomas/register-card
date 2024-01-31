import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitedComponent } from './components/pages/submited/submited.component';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [{
  path: 'sucess', 
  component: SubmitedComponent
},
{
  path: '',
  component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
