import { CanDeactivate } from "@angular/router";
import { FormGroup } from "@angular/forms";

export interface FormComponent {
    form: FormGroup
}

export class PreventUnsavedChanges implements CanDeactivate<FormComponent> {

    canDeactivate(component: FormComponent) {
        if(component.form.dirty) 
            return confirm("You have unsaved changes. Are you sure to navigate?");
        
        return true;
    }
}