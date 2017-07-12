System.register(["@angular/router", "./user.component", "./user.form.component", "../prevent-unsaved-changes.gaurd"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, user_component_1, user_form_component_1, prevent_unsaved_changes_gaurd_1;
    var userRouterModule;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            },
            function (prevent_unsaved_changes_gaurd_1_1) {
                prevent_unsaved_changes_gaurd_1 = prevent_unsaved_changes_gaurd_1_1;
            }],
        execute: function() {
            exports_1("userRouterModule", userRouterModule = router_1.RouterModule.forChild([
                {
                    path: 'user',
                    component: user_component_1.UserComponent
                },
                {
                    path: 'user/:id',
                    component: user_form_component_1.UserFormComponent,
                    canDeactivate: [prevent_unsaved_changes_gaurd_1.PreventUnsavedChanges]
                },
                {
                    path: 'user/new',
                    component: user_form_component_1.UserFormComponent,
                    canDeactivate: [prevent_unsaved_changes_gaurd_1.PreventUnsavedChanges]
                }
            ]));
        }
    }
});
//# sourceMappingURL=user.routing.js.map