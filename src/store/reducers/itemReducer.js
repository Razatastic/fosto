const initState = {
  items: [{ id: "1", title: "Camera", content: "on Bedford" }]
};

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_ITEM":
      return state;
    case "CREATE_ITEM_ERROR":
      console.log("Create item error", action.err);
      return state;
    default:
      return state;
  }
};

export default itemReducer;
