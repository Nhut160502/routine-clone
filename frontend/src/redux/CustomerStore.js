import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "../customer/providers/cartSlice";
import favouriteSlice from "../customer/providers/favouriteSlice";
import loginSlice from "../customer/providers/loginSlice";
import overlaySlice from "../customer/providers/overlaySlice";
import registerSlice from "../customer/providers/registerSlice";
import sidebarSlice from "../customer/providers/sidebarSlice";
import subUserSlice from "../customer/providers/subUserSlice";
import loadingSlice from "../customer/providers/loadingSlice";

const persistConfig = {
  key: "root1",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  sidebar: sidebarSlice,
  cart: cartSlice,
  overlay: overlaySlice,
  subUser: subUserSlice,
  favourite: favouriteSlice,
  login: loginSlice,
  register: registerSlice,
  loading: loadingSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const CustomerStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(CustomerStore);
