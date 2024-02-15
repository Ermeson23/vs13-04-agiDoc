import { combineReducers } from "@reduxjs/toolkit";

import registerReducer from "../store/register/registerSlice";
import loginSliceReducer from './login/loginSlice'

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;