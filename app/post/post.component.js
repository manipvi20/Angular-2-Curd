System.register(["@angular/core", '../user/user.service', "./post.service", 'underscore'], function(exports_1, context_1) {
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
    var core_1, user_service_1, post_service_1, _;
    var PostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            PostComponent = (function () {
                function PostComponent(_postService, _userService) {
                    this._postService = _postService;
                    this._userService = _userService;
                    this.posts = [];
                    this.pagedPosts = [];
                    this.title = "Posts";
                    this.pageSize = 10;
                }
                PostComponent.prototype.ngOnInit = function () {
                    this.loadPosts();
                    this.loadUsers();
                };
                PostComponent.prototype.loadUsers = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (users) { return _this.users = users; });
                };
                PostComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.postsLoading = true;
                    this._postService.getPosts(filter)
                        .subscribe(function (res) {
                        _this.posts = res;
                        _this.pagedPosts = _.take(_this.posts, _this.pageSize);
                    }, function (err) {
                        console.log(err + "Could not process");
                    }, function () { _this.postsLoading = false; });
                };
                PostComponent.prototype.reLoadPosts = function (filter) {
                    this.currentPost = null;
                    this.loadPosts(filter);
                };
                PostComponent.prototype.getComments = function (post) {
                    var _this = this;
                    this.currentPost = post;
                    this.commentLoading = true;
                    this._postService.getPost(post.id)
                        .subscribe(function (res) { return _this.currentPost.comments = res; }, null, function () { return _this.commentLoading = false; });
                };
                PostComponent.prototype.onPageChanged = function (page) {
                    console.log(page);
                    var startIndex = (page - 1) * this.pageSize;
                    this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
                };
                PostComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: '../app/post/post.component.html',
                        styles: ["\n        .posts li:hover { background: #ecf0f1; } \n        .list-group-item.active, \n        .list-group-item.active:hover, \n        .list-group-item.active:focus { \n            background-color: #ecf0f1;\n            border-color: #ecf0f1; \n            color: #2c3e50;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, user_service_1.UserService])
                ], PostComponent);
                return PostComponent;
            }());
            exports_1("PostComponent", PostComponent);
        }
    }
});
//# sourceMappingURL=post.component.js.map