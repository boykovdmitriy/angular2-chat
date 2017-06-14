import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LayoutModule} from "./pages/_layout.module";

@NgModule
({
    imports     : [BrowserModule, LayoutModule],
    declarations: [AppComponent],
    bootstrap   : [AppComponent]
})

export class AppModule {

}