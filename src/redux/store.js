import {configureStore} from "@reduxjs/toolkit";
import tourReducer from "./slice/tourSlice";

const store = configureStore({
    reducer: {
        tours: tourReducer,
    }
})

export default store