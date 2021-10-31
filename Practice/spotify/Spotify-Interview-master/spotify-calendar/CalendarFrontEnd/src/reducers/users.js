/** The initial state; no tokens and no user info */
const initialState = {
  user: undefined,
  loading: false,
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return Object.assign({}, state, { loading: true });
    case "LOGIN_FAILURE":
      return Object.assign({}, state, { loading: false });
    case "USER_NEW":
      return Object.assign({}, state, {
        user: Object.assign({}, state.user, { user: action.user }),
        loading: false,
      });
    case "USER_SIGN":
      return Object.assign({}, state, {
        user: Object.assign({}, state.user, { user: action.user }),
        loading: false,
      });
    case "USER_SIGN_OFF":
      return Object.assign({}, state, {
        user: undefined,
      });
    default:
      return state;
  }
}
