import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { UserService }  from "./user.service";
import { BasicValidator } from "../shared/basicValidator";
import { User }     from "./user";

@Component({
    selector: 'user-forms',
    templateUrl: './app/user/user.form.component.html'
})
export class UserFormComponent implements OnInit {
    title="New User";
    form:FormGroup;
    user = new User();;

    constructor(
        private _formBuilder: FormBuilder,
        private _userService : UserService,
        private _router : Router,
        private _activatedRoutes : ActivatedRoute
    ){
        this.form = _formBuilder.group({
            name: ['', Validators.required],
            email: ['', BasicValidator.emailValidation],
            phone: [],
            address: _formBuilder.group({
                street: [],
                suite: [],
                city: [],
                zip: []
            })
        });
    }
    ngOnInit() {
        var id = this._activatedRoutes.params.subscribe(params => {
            var id = +params['id'];
            this.title = id ? "Update User" : "New User";

            if(!id)
                return;

            this._userService.getUser(id).subscribe(
                user => this.user = user,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['not-found']);
                }
            });
        });

    }
    log(name) {
        console.log(name);
    }

    addNewUser () {
        var result;

        if(this.user.id)
            result = this._userService.updateUser(this.user);
        else 
           result = this._userService.addUser(this.user);
        
       result.subscribe(x=>{

        //this.form.markAsPristine();
        this._router.navigate(['user']);
       });       
    }
}