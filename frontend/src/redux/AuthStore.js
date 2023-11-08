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
import loadingSlice from "src/auth/providers/loadingSlice";

const persistConfig = {
  key: "root2",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  loading: loadingSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const AuthStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(AuthStore);
