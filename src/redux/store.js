import {configureStore, combineReducers} from '@reduxjs/toolkit'
import dayCondition from './slice/dayCondition';

const rootReducer = combineReducers({
    dayCondition,
});

const store = configureStore({reducer: rootReducer});
export default store;