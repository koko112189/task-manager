import { Routes } from '@angular/router';

export const routes: Routes = [
 {
    path: 'main',
    loadComponent: () => import('./presentation/pages/task-page/task-page.page').then(m => m.TaskPagePage)},
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'manage-task', loadComponent: () => import('./presentation/pages/add-edit-task-page-component/add-edit-task-page-component.component').then(m => m.AddEditTaskPageComponentComponent)},
    {path: 'categories', loadComponent: () => import('./presentation/pages/categories-page/categories-page.component').then(m => m.CategoriesPageComponent)}
 
];
