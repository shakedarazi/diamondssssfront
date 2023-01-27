import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  diamondReducer from '../features/diamonds/diamondsSlice';
import studentReducer from '../features/student/studentSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    student:studentReducer,
    diamond : diamondReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
