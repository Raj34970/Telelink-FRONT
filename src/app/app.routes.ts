import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Lxhome } from './pages/lxhome/lxhome';

export const routes: Routes = [
    {   
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {   
        path: 'home',
        component: Home,
        title: 'home'
    },
    {   
        path: 'lxhome',
        component: Lxhome,
        title: 'home'
    }
];
