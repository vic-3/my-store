import store from './store';


const initialState=store;



function reducer(state=initialState, action){
  
    switch(action.type){
      case 'ADD_ITEM':
        var newItemId=action.payload.id;
        let  newItem=state.products.find(product=>product.id===newItemId);
        
        let alreadyExists=state.cart.find(cartItem=>cartItem.id===newItemId);
        let newTotal=state.cartTotal+newItem.price;
       
        if(alreadyExists){
          return{
            ...state
          }
        
        }
        else{
          return{
            
            ...state, cart:[...state.cart,newItem],
            cartTotal:newTotal
          }
        }
        
        
         
        
       
      case "REMOVE_ITEM":
        let id=action.payload.id 
        //let ItemToRemove=state.cart.find(item=>item.id===id);

        let newCart=state.cart.filter(item=>id!==item.id);
        
        return{
          ...state,cart:newCart
        }
        
      default:
        return state;
    }
    
  }
  
  export default reducer;