import { RouterModule } from "@angular/router";
import { PostComponent } from "./post.component";

export const postRoutingModule = RouterModule.forChild([
    {
        path: 'posts',
        component: PostComponent
    }
])

