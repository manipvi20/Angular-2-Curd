import { Component, OnInit }    from "@angular/core";

import { Router } from "@angular/router";
import { UserService }  from "./user.service";

@Component({
    selector: 'user-comp',
    templateUrl: './app/user/user.component.html'
})
export class UserComponent implements OnInit {

    users : any[];
    isLoading = true;
    constructor (private _userSerive : UserService, private _router: Router) { }

    ngOnInit() {
         this._userSerive.getUsers()
         .subscribe(users => {
             this.users = users
             this.isLoading = false;
            } );    
    }

    deleteuser(user) {
        if(confirm("Are you sure to delete this user?")) 

            var index = this.users.indexOf(user.id);
            console.log(index);
            this.users.splice(index, 1);
            console.log(this.users)
            
            this._userSerive.deleteUser(user.id).
            subscribe(null,
            err=> {
                console.log("Could not delete this user");
                this.users.splice(index, 0 , user);
            })

            
        }
    }

}