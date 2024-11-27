import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { TaskRepositoryImpl } from './app/domain/repositories/TaskRepositoryImpl';
import { TaskRepository } from './app/data/repositories/TaskRepository.repository';
import { CategoryRepository } from './app/data/repositories/CategoryRepository.repository';
import { CategoryRepositoryImpl } from './app/domain/repositories/CategoryRepositoryImpl ';
import { GetTasksUseCase } from './app/domain/use-cases/GetTasksUseCase';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: TaskRepository, useClass: TaskRepositoryImpl},
    {provide: CategoryRepository, useClass: CategoryRepositoryImpl},
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
