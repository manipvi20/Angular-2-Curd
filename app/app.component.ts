import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="wrapper">
            <div class="header"> 
                <navbar></navbar>
                <div class="container">
                <router-outlet></router-outlet>
                </div>
            </div>
        </div>
    `

})

export class AppComponent {
    
}

