import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { LogsComponent } from './logs/logs.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    title: 'Categories'
  },
  {
    path: 'logs',
    component: LogsComponent,
    title: 'Logs'
  }
];

export default routeConfig;
