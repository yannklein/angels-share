import { writable } from "svelte/store";
import { Ngos } from '../middleware/database/ngos'

const ngoInfo = writable({});

const setNgo = ngo => {
  ngoInfo.set(ngo);
};

const initNgo = () => {
  const now = new Date();
  console.log("init ngo")
  Ngos.findByNgoPeriod(now).then(querySnapshot => {
    querySnapshot.forEach((doc) => {
      const ngoData = doc.data()
      ngoInfo.set(ngoData);
    });
  })
}

const removeNgo = () => {
  ngoInfo.set({});
};

const currentNgo = {
  subscribe: ngoInfo.subscribe,
  set: setNgo,
  init: initNgo,
  remove: removeNgo
};

export { currentNgo };