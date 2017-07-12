import { NgModule }     from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule}    from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpModule }   from "@angular/http";

import { UserComponent } from "./user.component";
import { UserFormComponent } from "./user.form.component";
import { UserService } from "./user.service";
import { PreventUnsavedChanges } from '../prevent-unsaved-changes.gaurd';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
        ],
    declarations: [
        UserFormComponent,
        UserComponent
    ],
    exports: [
        UserFormComponent,
        UserComponent
    ],
    providers: [
        UserService,
        PreventUnsavedChanges
        ]
})

export class UserModule {

}