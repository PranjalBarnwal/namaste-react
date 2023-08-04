import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"name",
    initialState:{
            items:[],
    },
    reducers:{
        addItem:(state,action)=>{
         state.items.push(action.payload);
        },
        clearCart:(state)=>{
            state.items=[];
        },
        removeItem:(state,action)=>{
            state.items.splice(state.items.indexOf(action.payload),1);
        }
    } 
})
  
export const {addItem,removeItem,clearCart}=cartSlice.actions;   
export default cartSlice.reducer;