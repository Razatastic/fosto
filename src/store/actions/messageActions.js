const createMessage = message => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const senderEmail = getState().firebase.auth.email;
    const firestore = getFirestore();
    firestore
      .collection("messages")
      .add({
        ...message,
        senderEmail: senderEmail,
        sent: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_MESSAGE", message });
      })
      .catch(err => {
        dispatch({ type: "CREATE_MESSAGE_ERROR", err });
      });
  };
};

export default createMessage;
