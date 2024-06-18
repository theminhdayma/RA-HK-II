const initialRegister: any = [];

const reducerRegister = (state = initialRegister, action: any) => {
  switch (action.type) {
    case 'REGISTER':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducerRegister;
