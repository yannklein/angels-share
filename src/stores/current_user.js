import { writable } from "svelte/store";
import { Users } from '../middleware/database/users'


const userInfo = writable({});

const setUser = user => {
  userInfo.set(user);
  console.log('user set!')
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
