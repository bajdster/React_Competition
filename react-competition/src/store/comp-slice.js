import { createSlice } from "@reduxjs/toolkit";

const compSlice = createSlice({
    name:'players',
    initialState:{
        names: []
    },
    reducers: {
        addPlayer(state, action)
        {
            const newPlayer = action.payload;
            state.names.push(newPlayer);
        },
        deletePlayer(state, action)
        {
            const playerIndex = action.payload
            const filteredArr = state.names.filter((player, index)=>
                {
                    return index !== playerIndex
                })
            state.names = filteredArr
            
        },
        editPlayer(state, action)
        {
            const payload = action.payload
            console.log(payload.editName)
            const editedArr = state.names.map((player, index)=>
            {
                if(index === payload.index)
                {
                    return payload.editName
                }
                else return player
            })
            state.names = editedArr
        }
    }
})

export const compActions = compSlice.actions

export default compSlice