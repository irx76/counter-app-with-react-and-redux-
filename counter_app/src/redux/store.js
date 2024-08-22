import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';


export default configureStore({
    reducer: {
        counter: counterReducer  //the reducer contains the actions
    }
});