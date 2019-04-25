const itemReducer = (state = null, action) => {
  switch (action.type) {
    case "CREATE_STATUS":
      console.log("Created status", action.status);
      return state;
    case "CREATE_STATUS_ERROR":
      console.log("Create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default itemReducer;
