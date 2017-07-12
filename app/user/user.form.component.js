System.register(['@angular/core', "@angular/forms", "@angular/router", "./user.service", "../shared/basicValidator", "./user"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1, router_1, user_service_1, basicValidator_1, user_1;
    var UserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (basicValidator_1_1) {
                basicValidator_1 = basicValidator_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            UserFormComponent = (function () {
                function UserFormComponent(_formBuilder, _userService, _router, _activatedRoutes) {
                    this._formBuilder = _formBuilder;
                    this._userService = _userService;
                    this._router = _router;
                    this._activatedRoutes = _activatedRoutes;
                    this.title = "New User";
                    this.user = new user_1.User();
                    this.form = _formBuilder.group({
                        name: ['', forms_1.Validators.required],
                        email: ['', basicValidator_1.BasicValidator.emailValidation],
                        phone: [],
                        address: _formBuilder.group({
                            street: [],
                            suite: [],
                            city: [],
                            zip: []
                        })
                    });
                }
                ;
                UserFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._activatedRoutes.params.subscribe(function (params) {
                        var id = +params['id'];
                        _this.title = id ? "Update User" : "New User";
                        if (!id)
                            return;
                        _this._userService.getUser(id).subscribe(function (user) { return _this.user = user; }, function (response) {
                            if (response.status == 404) {
                                _this._router.navigate(['not-found']);
                            }
                        });
                    });
                };
                UserFormComponent.prototype.log = function (name) {
                    console.log(name);
                };
                UserFormComponent.prototype.addNewUser = function () {
                    var _this = this;
                    var result;
                    if (this.user.id)
                        result = this._userService.updateUser(this.user);
                    else
                        result = this._userService.addUser(this.user);
                    result.subscribe(function (x) {
                        //this.form.markAsPristine();
                        _this._router.navigate(['user']);
                    });
                };
                UserFormComponent = __decorate([
                    core_1.Component({
                        selector: 'user-forms',
                        templateUrl: './app/user/user.form.component.html'
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, user_service_1.UserService, router_1.Router, router_1.ActivatedRoute])
                ], UserFormComponent);
                return UserFormComponent;
            }());
            exports_1("UserFormComponent", UserFormComponent);
        }
    }
});
//# sourceMappingURL=user.form.component.js.map