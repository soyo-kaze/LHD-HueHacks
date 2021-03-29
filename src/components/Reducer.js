export const initialState = {
  sender: "Sameer",
  receiver: "Soyokaze",
  qoute:
    "Holi is a special time of year to remember those who are close to our hearts with splashing colors!",
  img: "",
};

const reducer = (state, action) => {
  //   console.log({ action });
  switch (action.type) {
    case "ADD_TO_DB":
      return {
        ...state,
        ...action.item,
      };

    default:
      return state;
  }
};

export default reducer;
