export default {
  unregisteredUsers(state) {
    return state.users.filter(user => !user.registered);
  },
  registrations(state) {
    return state.registrations;
  },
  totalRegistration(state) {
    return state.registrations.length
  }
}