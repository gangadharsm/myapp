import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptInPreloadStrategyService } from './loading-strategies/opt-in-preload-strategy.service';
import { OnDemandPreloadStrategy } from './loading-strategies/on-demand-preload-strategy.service';
import { AuthGuard } from './app-security/angular-guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./models/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./models/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],
    data: { preload: true}
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: OnDemandPreloadStrategy })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
