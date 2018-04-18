const dummyReducerDefaultState = {
  count: null,
  pesanan: [],
};

const dummyReducer = (state = dummyReducerDefaultState, action) => {
  switch (action.type) {
    case 'GET_DUMMY':
      return {
        ...state,
        count: action.pesanan.count,
        pesanan: action.pesanan.rows,
      };
    default:
      return state;
  }
};

export default dummyReducer;
