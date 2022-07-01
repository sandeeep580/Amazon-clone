export const initialState = {
  basket: [],
  user: null,
};

export var getBasketTotal = (basket) => {
  var total = 0,
    n = basket.length;
  for (let i = 0; i < n; i++) {
    total += basket[i].price;
  }
  return total;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        //other components of the state are returned as it is by ...state
        ...state,
        // adding item to the basket(...state.basket contains the intital content of the basket and action.item is the new item added)
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "Cant remove product (id: ${action.id}) as its not in the basket!"
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
