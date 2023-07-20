import {configureStore} from "@reduxjs/toolkit";
import compSlice from "./comp-slice";

const store  = configureStore({
    reducer: {
        players: compSlice.reducer,
    }
})

export default store