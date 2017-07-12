System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BasicValidator;
    return {
        setters:[],
        execute: function() {
            BasicValidator = (function () {
                function BasicValidator() {
                }
                BasicValidator.emailValidation = function (control) {
                    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var valid = regEx.test(control.value);
                    return valid ? null : { email: true };
                };
                return BasicValidator;
            }());
            exports_1("BasicValidator", BasicValidator);
        }
    }
});
//# sourceMappingURL=basicValidator.js.map