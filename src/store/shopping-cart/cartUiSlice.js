
import {createSlice} from '@reduxjs/toolkit';

const cartUiSlice = createSlice({
    name:'cartUi',
    initialState:{cartIsVisable:false},

    reducers:{
        toggle(state){
            state.cartIsVisable = !state.cartIsVisable;
        },
        closeCart(state){
            state.cartIsVisable =state.cartIsVisable=false
        }
    }
})

export const cartUiActions = cartUiSlice.actions;
export default cartUiSlice;
