// import {
//   channelApi,
// } from '@entities';
import { tvApi } from '@entities';
import { combineReducers, configureStore } from '@reduxjs/toolkit';



const rootReducer = combineReducers({
  [tvApi.reducerPath]: tvApi.reducer,
  // [channelApi.reducerPath]: channelApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
         tvApi.middleware
      ]),
  });
};
