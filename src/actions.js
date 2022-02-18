function addToCart(id){
    return{
        type:"ADD_ITEM",
        payload:{
            id:id
        }
    }
}

export default addToCart;