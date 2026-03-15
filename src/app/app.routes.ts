import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((module) => module.HomeComponent),
  },
  {
    path: 'blog',
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
