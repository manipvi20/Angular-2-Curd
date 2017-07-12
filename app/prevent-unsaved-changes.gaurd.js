System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PreventUnsavedChanges;
    return {
        setters:[],
        execute: function() {
            PreventUnsavedChanges = (function () {
                function PreventUnsavedChanges() {
                }
                PreventUnsavedChanges.prototype.canDeactivate = function (component) {
                    if (component.form.dirty)
                        return confirm("You have unsaved changes. Are you sure to navigate?");
                    return true;
                };
                return PreventUnsavedChanges;
            }());
            exports_1("PreventUnsavedChanges", PreventUnsavedChanges);
        }
    }
});
//# sourceMappingURL=prevent-unsaved-changes.gaurd.js.map