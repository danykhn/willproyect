import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo: 'home',        
    },
    {
        path: 'home',
        loadComponent: () => import("./components/home/home.component"),    
    },
    {
        path:'about',             
        loadComponent: () => import("./components/about/about.component")
    }, 
    {
        path: 'ofertas',    
        loadComponent: () => import("./components/ofertas/ofertas.component"),
        children:[
            {
                path:'low',
                pathMatch:'full',
                loadComponent: () => import("./components/ofertas/low/low.component"), 
            },
            {
                path:'medium',
                loadComponent: () => import("./components/ofertas/medium/medium.component"), 
            },
            {
                path:'high',
                loadComponent: () => import("./components/ofertas/high/high.component")
            },
            {
                path:'vip',
                loadComponent: () => import("./components/ofertas/vip/vip.component"), 
            }
        ]
    }
];
