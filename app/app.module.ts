import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';

import { AppComponent }      from './app.component';
import { NavbarComponent }   from './navbar.component';

import { UserModule }        from './user/user.module';
import { appRouterModule }   from './app.routing';
import { userRouterModule }  from './user/user.routing';
import { PostModule }        from './post/post.module';
import { postRoutingModule } from './post/post.routing'

@NgModule({
    imports: [
        BrowserModule,
        UserModule,
        userRouterModule,
        postRoutingModule,
        appRouterModule,
        PostModule     
    ],
    declarations: [
        AppComponent,
        NavbarComponent    
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}