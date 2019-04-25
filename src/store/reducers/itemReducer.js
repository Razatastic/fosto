const itemReducer = (state = null, action) => {
  switch (action.type) {
    case "CREATE_ITEM":
      console.log("Created item", action.item);
      return state;
    case "CREATE_ITEM_ERROR":
      console.log("Create item error", action.err);
      return state;
    default:
      return state;
  }
};

export default itemReducer;
