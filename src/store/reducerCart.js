import {createStore} from "redux";
import items from "../server/items";
import {ADD_TO_CART, CLEAR_CART, DELETE_ITEM, PLUS_CART, REMOVE_CART, TOTAL_COUNT} from "../utils/utils";
const initialState = {
        items: items,
        cart: [],
        isOpen: false,
        total: 0,
        shipping:10
}
function reducerCart (state = initialState, action){
    switch (action.type){
        case ADD_TO_CART:
            let check =state.cart.find(item=>item.id===action.payload);

            if(!check){
                let items = state.items.filter(item=>item.id===action.payload);
                let itemsCart = [...state.cart, ...items]
                items.forEach(item=>{
                    item.isInCart=true
                })
                return{
                    ...state,
                    cart:itemsCart
                }
            }
            else{
                let items = state.items.filter(item=>item.id===action.payload);

                items.forEach(item=>{
                    item.isInCart=true
                })

                return{
                    ...state
                }
            }
        case PLUS_CART:

            let incResults = state.cart.map(item=>{
                if(item.id === action.payload){
                    item={...item, count:item.count + 1}
                }
                return item
            })

            return{
                ...state,
                cart:incResults

            }
        case REMOVE_CART:

            let decResults = state.cart.map(item=>{
                if(item.id===action.payload){
                    item={...item, count:item.count===1 ?item.count=1:item.count - 1}
                }
                return item;
            })

            return{
                ...state,
                cart:decResults

            }
        case TOTAL_COUNT:
            const totals = state.cart.reduce((prev, item)=>{
                return prev + (item.price * item.count)
            },0)

            return{
                ...state,
                total:totals
            }
        case DELETE_ITEM:
            let newItem = state.cart.map(item => {
                if (item.id === action.payload){
                    item={...item, isInCart: false}
                }
                return item
            }).filter(item => item.isInCart === true)
            let changeItems = state.items.map(item => {
                if (item.id === action.payload){
                    item={...item, isInCart: false}
                }
                return item
            })
            return {...state, cart: newItem, items: changeItems}
        case CLEAR_CART:
            let clearCart = state.cart.map(item => item.isInCart = false).filter(item => item.isIncart === true);
            let itemsUpdate = state.items.map(item => item={...item, isInCart: false});
            return {...state, cart: clearCart, items: itemsUpdate};
        default:
            return state;
    }
}


export const store = createStore(reducerCart);
