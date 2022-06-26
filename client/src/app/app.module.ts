import { NgModule } from '@angular/core';

import { AppComponent } from './core/app/app.component';
import { CoreModule } from './core/core.module';

// TODO: settle material imports to suitable module while module separation
@NgModule({
  declarations: [
  ],
  imports: [
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
