import {Routes} from '@angular/router';
import {LayoutComponent} from "./pages/_layout.component";
import {NotFoundComponent} from "./pages/notFoundPage/notFound.component";

export const ROUTES: Routes = [
           {
               path     : '',
               component: LayoutComponent
           }, {
               path     : '**',
               component: NotFoundComponent
           }
       ];