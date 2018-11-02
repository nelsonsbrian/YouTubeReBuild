import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MainContentComponent
      },
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
