import { combineReducers } from "redux";
import admin_reducer from "./ADMIN/admin_reducer";
import event_reducer from "./EVENT/event_reducer";

const root_reducer = combineReducers({
    admin: admin_reducer,
    event: event_reducer
})

export default root_reducer;