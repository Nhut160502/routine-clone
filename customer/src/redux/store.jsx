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
import cartSlice from "src/providers/cartSlice";
import favouriteSlice from "src/providers/favouriteSlice";
import loginSlice from "src/providers/loginSlice";
import overlaySlice from "src/providers/overlaySlice";
import registerSlice from "src/providers/registerSlice";
import sidebarSlice from "src/providers/sidebarSlice";
import subUserSlice from "src/providers/subUserSlice";

const persistConfig = {
  key: "root",
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
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
