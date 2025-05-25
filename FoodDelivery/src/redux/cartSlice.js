import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart" ,
    initialState : [] ,
    reducers : {
        AddItem :(state , action)=>{
           let itemExist = state.find((item)=>item.id == action.payload.id)
           if(itemExist){
           return state.map((item)=>(item.id === action.payload.id ?{...item ,qty:item.qty+1}:item))
           }
            else{
                state.push(action.payload)
            }
        },
        RemoveItem:(state,action)=>{
           return state.filter((item)=>item.id !== action.payload)
        },
        Incrementqty :(state,action)=>{
             return state.map((item)=>(item.id === action.payload ?{...item ,qty:item.qty+1}:item))

        },
        Decrementqty :(state,action)=>{
             return state.map((item)=>(item.id === action.payload ?{...item ,qty:item.qty-1}:item))

        },

    }
})


export const {AddItem , RemoveItem,Incrementqty,Decrementqty} = cartSlice.actions
export default cartSlice.reducer