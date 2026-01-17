import React, { createContext, useContext, useMemo, useReducer } from 'react'; 



const CartContext = createContext(); 
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex ? { ...item, qty: item.qty + 1 } : item
        );
        return { ...state, items: updatedItems };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, qty: 1 }],
        };
      }
    case "UPDATE_ITEM":
      const updatedCartItems = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.qty }
          : item
      );
      return { ...state, items: updatedCartItems };
    case "REMOVE_ITEM":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, items: filteredItems };
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const subtotal = useMemo(() => { 
    
    return state.items.reduce((acc, item) => acc + item?.current_price?.[0]?.NGN?.[0] * item.qty, 0);
  }, [state.items]);
  const total = useMemo(() => {
    return subtotal + subtotal * 1;
  }, [subtotal]);
  return (
    <CartContext.Provider value={{ cart: state.items, subtotal, total, dispatch }}>
      {" "}
      {children}{" "}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};



