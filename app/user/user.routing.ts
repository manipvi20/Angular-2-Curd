import { RouterModule }      from "@angular/router";

import { UserComponent }     from "./user.component";
import { UserFormComponent } from "./user.form.component";

import { PreventUnsavedChanges } from "../prevent-unsaved-changes.gaurd";

export const userRouterModule = RouterModule.forChild([
    { 
        path: 'user', 
        component: UserComponent
     },
     { 
        path: 'user/:id', 
        component: UserFormComponent,
        canDeactivate: [PreventUnsavedChanges]
     },
    { 
        path: 'user/new', 
        component: UserFormComponent,
        canDeactivate: [PreventUnsavedChanges]
     }
]);