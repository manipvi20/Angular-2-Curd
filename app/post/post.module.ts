import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

import { SharedModule } from "../shared/shared.module";

import { PostComponent } from "./post.component";
import { PostService } from "./post.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpModule,
        SharedModule
    ],
    declarations: [
        PostComponent
    ],
    exports: [
        PostComponent
    ],
    providers: [
        PostService
        ]
})

export class PostModule {

}