import { inject } from '@angular/core';
import { CanMatchFn, Routes } from '@angular/router';
import { DebugService } from './services/debug.service';

const debugGuard: CanMatchFn = () => inject(DebugService).isEnabled;

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((module) => module.HomeComponent),
  },
  {
    path: 'blog',
    canMatch: [debugGuard],
    loadComponent: () => import('./pages/blog/blog.component').then((module) => module.BlogComponent),
  },
  {
    path: 'events',
    loadComponent: () => import('./pages/events/events.component').then((module) => module.EventsComponent),
  },
  {
    path: 'events/:id',
    loadComponent: () =>
      import('./pages/events/event-detail/event-detail.component').then(
        (module) => module.EventDetailComponent,
      ),
  },
  {
    path: 'blog/:id',
    canMatch: [debugGuard],
    loadComponent: () =>
      import('./pages/blog/blog-detail/blog-detail.component').then(
        (module) => module.BlogDetailComponent,
      ),
  },
  {
    path: 'chi-siamo',
    loadComponent: () => import('./pages/team/team.component').then((module) => module.TeamComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
