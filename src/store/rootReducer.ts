import { combineReducers } from "@reduxjs/toolkit";

import registerReducer from "../store/register/registerSlice";

const rootReducer = combineReducers({
  register: registerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;