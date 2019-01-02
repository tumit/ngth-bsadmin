import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';

PlaygroundModule
  .configure({
    selector: 'ngth-root',
    overlay: false,
    modules: []
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
