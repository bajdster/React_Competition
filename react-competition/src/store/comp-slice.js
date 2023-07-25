import { createSlice } from "@reduxjs/toolkit";

//"Andrzej", "Jurek", "Antek", "Cristiano", "Leo", "Robert", "Paul"

const compSlice = createSlice({
    name:'players',
    initialState:{
        names: [],
        winner: '',
        lang: 'english'
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
        },

        getWinner(state, action)
        {
            const winnerName = action.payload;
            state.winner = winnerName;
        },

        resetState(state, action)
        {
            state.names = []
            state.winner = ''
        },

        selectLanguage(state,action)
        {
            const language = action.payload;
            language === 'polish' ? state.lang = 'polish' : state.lang ='english'
        }
    }
})

export const compActions = compSlice.actions

export default compSlice