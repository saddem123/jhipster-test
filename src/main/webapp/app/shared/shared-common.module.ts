import { NgModule } from '@angular/core';

import { JhipsterPlaursightSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterPlaursightSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterPlaursightSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterPlaursightSharedCommonModule {}
