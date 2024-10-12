import { Routes } from '@angular/router';
import { LandingComponent } from './components/pages/landing/landing.component';
import { ShoppingbagComponent } from './components/pages/shoppingbag/shoppingbag.component';

export const routes: Routes = [
    {
        path:'',
        component:LandingComponent
    },
    {
        path:'shoppingbag',
        component:ShoppingbagComponent
       },
];
