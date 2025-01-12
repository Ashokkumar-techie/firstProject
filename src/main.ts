import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { SimpleTemplateFormComponent } from './app/simple-template-form/simple-template-form.component';
import { ReactiveFormComponent } from './app/reactive-form/reactive-form.component';
import { LandingComponent } from './app/landing/landing.component';


bootstrapApplication(SimpleTemplateFormComponent, appConfig)
  .catch((err) => console.error(err));
