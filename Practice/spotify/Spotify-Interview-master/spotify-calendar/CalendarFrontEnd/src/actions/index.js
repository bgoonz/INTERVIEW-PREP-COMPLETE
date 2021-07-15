import { auth } from "../firebase-conf/index.js";
import { push } from "connected-react-router";
import { success, error } from "react-notification-system-redux";

// Sign In
export const createUserThunk = (email, password) => (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      dispatch({
        type: "USER_NEW",
        user: res.user,
      });
      dispatch(
        success({
          // uid: 'once-please', // you can specify your own uid if required
          title: `Welcome ${res.user.email}`,
          message: "Create Some Sweet Events!",
          position: "tr",
        })
      );
      dispatch(push("/"));
    })
    .catch((errorStatus) => {
      dispatch({ type: "LOGIN_FAILURE" });
      dispatch(
        error({
          // uid: 'once-please', // you can specify your own uid if required
          title: `Error`,
          message: `${errorStatus.message}`,
          position: "tr",
        })
      );
    });
};

// Sign In
export const signInAction = (email, password) => (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      dispatch({
        type: "USER_SIGN",
        user: res.user,
      });
      dispatch(
        success({
          // uid: 'once-please', // you can specify your own uid if required
          title: `Welcome ${res.user.email}`,
          message: "Create Some Sweet Events!",
          position: "tr",
        })
      );
      dispatch(push("/"));
    })
    .catch((errorStatus) => {
      dispatch({ type: "LOGIN_FAILURE" });
      dispatch(
        error({
          // uid: 'once-please', // you can specify your own uid if required
          title: `Error`,
          message: `${errorStatus.message}`,
          position: "tr",
        })
      );
    });
};

// Sign out
export const signOutThunk = () => (dispatch) => {
  auth.signOutFirebase().then(() => {
    dispatch({
      type: "USER_SIGN_OFF",
    });
    dispatch(
      success({
        // uid: 'once-please', // you can specify your own uid if required
        title: `User Signed Off`,
        position: "tr",
      })
    );
  });
};
