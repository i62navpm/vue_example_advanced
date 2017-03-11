export const setUser = (state, user) => {
  state.user = Object.assign({}, state.user, user)
}
