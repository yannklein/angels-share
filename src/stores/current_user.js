import { writable } from "svelte/store";
// import { Users } from '../middleware/database/users'
import { Functions } from '../config/firebase'


const userInfo = writable({});

const setUser = user => {
  userInfo.set(user);
  console.log("user to set:", user);
  const editUser = Functions.httpsCallable('editUser');
  editUser(user);
};

const removeUser = () => {
  userInfo.set({});
};

const currentUser = {
  subscribe: userInfo.subscribe,
  set: setUser,
  remove: removeUser
};

export { currentUser };
