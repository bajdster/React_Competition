import { createSlice } from "@reduxjs/toolkit";

const compSlice = createSlice({
    name:'players',
    initialState:{
        names: []
    },
    reducers: {
        addPlayer(state, action)
        {

        },
        deletePlayer(state, action)
        {

        },
        editPlayer(state, action)
        {

        }
    }
})

export const compActions = compSlice.actions

export default compSlice