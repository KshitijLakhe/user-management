import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Users } from './features/users/users';

export const routes: Routes = [
    {path: '',component:Home},
    // {path:'users',component:Users}
    {path:'users',
        loadComponent: ()=> import("./features/users/users").then(m => m.Users)
    }
];
