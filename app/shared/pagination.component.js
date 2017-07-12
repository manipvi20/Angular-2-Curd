System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var PagniationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PagniationComponent = (function () {
                function PagniationComponent() {
                    this.items = [];
                    this.pageChanged = new core_1.EventEmitter();
                }
                PagniationComponent.prototype.ngOnChanges = function () {
                    this.currentpage = 1;
                    var pageCount = this.items.length / this.pagesize;
                    this.pages = [];
                    for (var i = 1; i <= pageCount; i++) {
                        this.pages.push(i);
                    }
                };
                PagniationComponent.prototype.onPageChange = function (page) {
                    this.currentpage = page;
                    this.pageChanged.emit(page);
                };
                PagniationComponent.prototype.onNextClick = function () {
                    if (this.currentpage == 1)
                        return;
                    this.currentpage++;
                    this.pageChanged.emit(this.currentpage);
                };
                PagniationComponent.prototype.onprevClick = function () {
                    if (this.currentpage == this.pages.length)
                        return;
                    this.currentpage--;
                    this.pageChanged.emit(this.currentpage);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PagniationComponent.prototype, "items", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], PagniationComponent.prototype, "pagesize", void 0);
                __decorate([
                    core_1.Output('pageChanged'), 
                    __metadata('design:type', Object)
                ], PagniationComponent.prototype, "pageChanged", void 0);
                PagniationComponent = __decorate([
                    core_1.Component({
                        selector: "pagination",
                        template: "\n        <div *ngIf=\"items.length > pagesize\">\n            <ul class=\"pagination\">\n            <li class=\"clickable\" [class.disabled]=\"currentpage == 1\" (click)=\"onprevClick()\">\n                <a aria-label=\"Previous\">\n                <span aria-hidden=\"true\">&laquo;</span>\n                </a>\n            </li>\n            <li class=\"clickable\" \n            [class.active]=\"currentpage == page\" \n            *ngFor=\"let page of pages\" \n            (click)=\"onPageChange(page)\"> \n                <a>{{page}}</a>\n            </li>\n            <li class=\"clickable\" [class.disabled]=\"currentpage == pagesize\" (click)=\"onNextClick(currentpage)\">\n                <a aria-label=\"Next\">\n                <span aria-hidden=\"true\">&raquo;</span>\n                </a>\n            </li>   \n            </ul>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PagniationComponent);
                return PagniationComponent;
            }());
            exports_1("PagniationComponent", PagniationComponent);
        }
    }
});
//# sourceMappingURL=pagination.component.js.map