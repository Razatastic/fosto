export const createItem = item => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const authorId = getState().firebase.auth.uid;
    const firestore = getFirestore();
    firestore
      .collection("items")
      .add({
        ...item,
        authorId: authorId,
        createdAt: new Date(),
        resolved: false
      })
      .then(() => {
        dispatch({ type: "CREATE_ITEM", item });
      })
      .catch(err => {
        dispatch({ type: "CREATE_ITEM_ERROR", err });
      });
  };
};

export const resolveItem = item => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection("items")
      .doc(item)
      .update({ resolved: true })
      .then(() => {
        dispatch({ type: "RESOLVE_ITEM", item });
      })
      .catch(err => {
        dispatch({ type: "RESOLVE_ITEM_ERROR", err });
      });
  };
};
