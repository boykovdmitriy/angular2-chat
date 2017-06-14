import {NgModule} from "@angular/core";
import {LayoutComponent} from "./_layout.component";
import {SideMenuModule} from "../components/sideMenu/sideMenu.module";
@NgModule({
    imports     : [SideMenuModule],
    declarations: [LayoutComponent],
    exports     : [LayoutComponent]
})
export class LayoutModule {
}