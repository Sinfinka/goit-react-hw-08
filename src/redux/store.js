import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import filterReducer from "./filters/slice";
import authReducer from './auth/slise'

export const store = configureStore({
  reducer: { contacts: contactsReducer, filters: filterReducer, auth: authReducer  },
});
