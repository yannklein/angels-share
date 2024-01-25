import { FirebaseNpos } from './index'

const nposDb = () => {
  const add = _npoInfo => {
    return false
    // return FirebaseNpos.add(npoInfo)
  }

  // TODO: Move to server function to check permission
  const archive = npoId => {
    return FirebaseNpos.doc(npoId).set({ archived: true }, { merge: true })
  }

  const update = (npoId, npoInfo) => {
    return FirebaseNpos.doc(npoId).update(npoInfo)
  }

  const findOne = npoId => {
    return FirebaseNpos.doc(npoId).get()
  }

  const findFirst = () => {
    return FirebaseNpos.orderBy("period", "asc").limit(1).get()
  }

  const findByNpoPeriod = (date, lang) => {
    const period = `${date.getFullYear()}-${date.getMonth()}`
    return FirebaseNpos.where('period', '==', period).limit(1).get()
  }

  const findAll = (active = true) => {
    let query = FirebaseNpos.where('archived', '==', false)
    return query.orderBy('period')
  }


  // TODO: Move to server function to check permissions
  const unarchive = npoId => {
    return FirebaseNpos.doc(npoId).set({ archived: false }, { merge: true })
  }

  return Object.freeze({
    add,
    archive,
    update,
    findOne,
    findAll,
    findByNpoPeriod,
    findFirst,
    unarchive
  })
}

const Npos = nposDb()

export { Npos }
