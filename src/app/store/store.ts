// import {
//   channelApi,
// } from '@entities';
import { combineReducers, configureStore } from '@reduxjs/toolkit';


const rootReducer = combineReducers({

  // [channelApi.reducerPath]: channelApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        // channelApi.middleware
      ]),
  });
};
