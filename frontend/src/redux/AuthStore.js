import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loadingSlice from "src/auth/providers/loadingSlice";
import modalSlice from "src/auth/providers/modalSlice";

const persistConfig = {
  key: "root2",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  loading: loadingSlice,
  modal: modalSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const AuthStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export let persistor = persistStore(AuthStore);
