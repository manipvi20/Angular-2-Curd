System.register(["@angular/router", "./post.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, post_component_1;
    var postRoutingModule;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            }],
        execute: function() {
            exports_1("postRoutingModule", postRoutingModule = router_1.RouterModule.forChild([
                {
                    path: 'posts',
                    component: post_component_1.PostComponent
                }
            ]));
        }
    }
});
//# sourceMappingURL=post.routing.js.map