/// <reference path="../../node_modules/@types/underscore/index.d.ts" />
import { Component, OnInit } from "@angular/core";

import { UserService }       from '../user/user.service';
import { PostService } from "./post.service";
//import 'rxjs/add/operator/delay';

import * as _ from 'underscore'; 

@Component({
    selector: 'posts',
    templateUrl: '../app/post/post.component.html',
    styles: [`
        .posts li:hover { background: #ecf0f1; } 
        .list-group-item.active, 
        .list-group-item.active:hover, 
        .list-group-item.active:focus { 
            background-color: #ecf0f1;
            border-color: #ecf0f1; 
            color: #2c3e50;
        }
    `]
})

export class PostComponent implements OnInit { 
    posts : any[] = [];
    pagedPosts = [];
    currentPost;
    postsLoading;
    commentLoading;
    title = "Posts";
    users : any[];
    pageSize = 10;

    constructor(private _postService : PostService, private _userService : UserService) {

    }
    ngOnInit() {
        this.loadPosts();
        this.loadUsers();
    }

    private loadUsers() { 
        this._userService.getUsers()
        .subscribe(users => this.users = users)
    }
    private loadPosts(filter?) {
        this.postsLoading = true;
        this._postService.getPosts(filter)
        .subscribe(
            res => {
                this.posts = res;
                this.pagedPosts = _.take(this.posts, this.pageSize)
            },
            err => {
                console.log(err + "Could not process")
            },
            ()=> {this.postsLoading = false}
        );
    }
    reLoadPosts(filter) {
       this.currentPost = null;
       this.loadPosts(filter);
    }
    getComments(post){
        this.currentPost = post;
        this.commentLoading = true;
        this._postService.getPost(post.id)
        .subscribe(
            res => this.currentPost.comments = res,
            null,
            ()=> this.commentLoading = false
        );
    }

    onPageChanged(page) {
        console.log(page);
        var startIndex = (page-1) * this.pageSize;
        this.pagedPosts = _.take(_.rest(this.posts, startIndex ), this.pageSize);
    }
}