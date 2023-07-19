import {configureStore} from "@reduxjs/toolkit";
import compSlice from "./comp-slice";

const store  = configureStore({
    reducer: {
        players: compSlice.players
    }
})

export default store