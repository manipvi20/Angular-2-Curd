System.register(["@angular/core", "@angular/router", "./user.service"], function(exports_1, context_1) {
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
    var core_1, router_1, user_service_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent(_userSerive, _router) {
                    this._userSerive = _userSerive;
                    this._router = _router;
                    this.isLoading = true;
                }
                UserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._userSerive.getUsers()
                        .subscribe(function (users) {
                        _this.users = users;
                        _this.isLoading = false;
                    });
                };
                UserComponent.prototype.deleteuser = function (user) {
                    var _this = this;
                    if (confirm("Are you sure to delete this user?"))
                        var index = this.users.indexOf(user.id);
                    console.log(index);
                    this.users.splice(index, 1);
                    console.log(this.users);
                    this._userSerive.deleteUser(user.id).
                        subscribe(null, function (err) {
                        console.log("Could not delete this user");
                        _this.users.splice(index, 0, user);
                    });
                };
                UserComponent = __decorate([
                    core_1.Component({
                        selector: 'user-comp',
                        templateUrl: './app/user/user.component.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
                ], UserComponent);
                return UserComponent;
            }());
            exports_1("UserComponent", UserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map