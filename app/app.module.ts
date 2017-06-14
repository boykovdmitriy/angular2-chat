import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LayoutModule} from "./pages/_layout.module";
import {NotFoundModule} from "./pages/notFoundPage/notFound.module";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";

@NgModule
({
    imports     : [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        LayoutModule,
        NotFoundModule],
    declarations: [AppComponent],
    bootstrap   : [AppComponent]
})

export class AppModule {

}