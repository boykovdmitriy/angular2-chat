import {Conversations} from "./conversation.model";

export interface AppState {
    readonly conversations: Conversations;
}