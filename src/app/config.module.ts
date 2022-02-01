import { APP_INITIALIZER } from '@angular/core';
import { ConfigAppInitializerService } from './services/config-app-initializer.service';

export function ConfigFactory(config: ConfigAppInitializerService) {
  return () => config.loadConfigurations();
}

export function initialize() {
  return {
    provide: APP_INITIALIZER,
    useFactory: ConfigFactory,
    deps: [ConfigAppInitializerService],
    multi: true,
  };
}

const ConfigModule = {
  init: initialize,
};

export { ConfigModule };
