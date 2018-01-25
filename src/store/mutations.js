export default {
  register(state, userId) {
    const date = new Date();
    const user = state.users.find(user => user.id == userId);
    user.registered = true;
    const registered = {
      userId: user.id,
      name: user.name,
      date: date.getMonth() + "/" + date.getDay()
    }
    state.registrations.push(registered);
  },
  unregister(state, payload) {
    const user = state.users.find(user => user.id == payload.userId);
    user.registered = false;
    const registration = state.registrations.find(registration => registration.userId == payload.userId);
    state.registrations.splice(state.registrations.indexOf(registration), 1);
  }
}