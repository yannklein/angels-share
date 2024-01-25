import { writable } from "svelte/store";
import { Npos } from '../middleware/database/npos'

const npoInfo = writable({});

const setNpo = npo => {
  npoInfo.set(npo);
};

const initNpo = () => {
  const now = new Date();
  console.log("init npo")
  
  findNpo(now)
}

const findNpo = (now) => {
  Npos.findByNpoPeriod(now).then(querySnapshot => {
    if (querySnapshot.length === 0) {
      querySnapshot.forEach((doc) => {
        const npoData = doc.data()
        npoInfo.set(npoData);
      });
    } else {
      Npos.findFirst().then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          const npoData = doc.data()
          npoInfo.set(npoData);
        });
      });
    }
  })
}

const removeNpo = () => {
  npoInfo.set({});
};

const currentNpo = {
  subscribe: npoInfo.subscribe,
  set: setNpo,
  init: initNpo,
  remove: removeNpo
};

export { currentNpo };