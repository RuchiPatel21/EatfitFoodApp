## Create store
- const store = configureStore({
    reducer :{
         "cart":cartReducer //cartReducer exported default from cartSlice
    }
})

## create slice
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem  : (state,action)=>{
            state.items.push(action.payload)
        },
        removeItem  : (state,action)=>{
            state.items.pop();
        },
        clearCart  : (state,action)=>{
            state.items.length=0;
        },
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer


## -------- Reading cart data -----------
import store from "../utils/store"

    const cartItems = useSelector((store)=>store.cart.items);
