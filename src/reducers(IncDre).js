//Menampung jumlah count dalam variabel initialState
let initialState = { count: 0 };

// Component reducer untuk menjalankan increment dan decrement
function reducer(state = initialState, action) {
  // jika action type yg di klik adalah Increment
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  }
  // jika action type yg di klik adalah Decrement
  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  }
  return state;
}

export default reducer;
