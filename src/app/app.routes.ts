import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Lxhome } from './pages/lxhome/lxhome';
import { Automation } from './pages/lxhome/automation/automation';
import { Telelink } from './pages/telelink/telelink';

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
        path: 'telelink',
        component: Telelink,
        title: 'telelink'
    },
    {   
        path: 'lxhome',
        component: Lxhome,
        title: 'lxhome',
    },
    {   
        path: 'lxhome/automation',
        component: Automation,
        title: 'automation'
    },
];
