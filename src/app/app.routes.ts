import { Routes } from '@angular/router';
import { AuthGuard } from '@angular/fire/compat/auth-guard';

import { LoginComponent } from './pages/login/login.component';
import { BrowserComponent } from './pages/browser/browser.component';

export const routes: Routes = [
    {path: '', 
    component: LoginComponent},
    { path: 'browser', 
    component: BrowserComponent, 
    canActivate: [AngularFireAuthGuard] },
    { path: '**', redirectTo: '' },
];
