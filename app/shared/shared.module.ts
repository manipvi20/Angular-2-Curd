import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner.component';
import { PagniationComponent } from './pagination.component';

@NgModule({
    imports: [CommonModule],
    declarations:[SpinnerComponent, PagniationComponent],
    exports: [SpinnerComponent, PagniationComponent]
})

export class SharedModule {

}