const initialState = {
  products: [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  card:[],
  head:{},
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_BASKET":
      return { ...state, basket: action.payload };
  case "SET_Favorites":
    return { ...state, favorites: action.payload };
    case "ADD_CARD":
      return { ...state, card: [...card, action.payload] };
    case "ADD_HEAD":
      return { ...state, head: [...head, action.payload] };
  
  }
  return state;
}
