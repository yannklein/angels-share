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
    if (doc.length === 0) {
      querySnapshot.forEach((doc) => {
        const npoData = doc.data()
        npoInfo.set(npoData);
      });
    } else {
      doc = Npos.findFirst()
      const npoData = doc.data()
      npoInfo.set(npoData);
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