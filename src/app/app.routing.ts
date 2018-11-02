import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { MainContentVideoComponent } from './main-content-video/main-content-video.component';

const appRoutes: Routes = [
    {
        path: '',
        component: MainContentComponent
    },
    {
        path: 'video/:id',
        component: MainContentVideoComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
