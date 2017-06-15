import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ConversationListComponent} from "./conversationList.component";
import {ConversationItemComponent} from "./conversationItem.component";
@NgModule({
    imports     : [CommonModule],
    declarations: [ConversationItemComponent, ConversationListComponent],
    exports     : [ConversationListComponent]
})

export class ConversationListModule {
}