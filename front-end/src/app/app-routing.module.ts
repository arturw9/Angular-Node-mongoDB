import { LoginComponent } from './pages/login/login.component';
import { InvestimentoInfoComponent } from '../app/pages/investimento-info/investimento-info.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestimentosComponent } from '../app/pages/investimentos/investimentos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'login'},
  { path: 'login', component: LoginComponent},
  { path: 'investimentos', component: InvestimentosComponent},
  { path: 'investimentos-info', component: InvestimentoInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
