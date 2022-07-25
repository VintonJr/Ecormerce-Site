
const CartReducer =(cart=[],action) => {
    if (action.type === "ADD"){
        let tempCart = cart.filter((product) => product.product_id === action.payload.product_id)
        if(tempCart < 1){
            return[...cart,action.payload]
        }else{
            return cart;
        }
    }
    if (action.type === "REMOVE-ALL"){
        let tempCart = cart.filter((product) => product.product_id === action.payload.product_id)
        if(tempCart < 1){
            return[...cart,action.payload]
        }else{
            return cart;
        }
    }
    if (action.type === "REMOVE") {
        return cart.filter((product) => product.product_id !== action.payload.product_id);
      }
      if (action.type === "INCREASE") {
        let tempcart = cart.map((product) => {
          if (product.product_id === action.payload.product_id) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
        return tempcart;
      }
      if (action.type === "DECREASE") {
        let tempcart = cart.map((product) => {
          if (product.product_id === action.payload.product_id) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        });
        return tempcart;
      }
      return cart;
    };
export default CartReducer