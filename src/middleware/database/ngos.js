import { FirebaseNgos } from './index'

const ngosDb = () => {
  const add = _ngoInfo => {
    return false
    // return FirebaseNgos.add(ngoInfo)
  }

  // TODO: Move to server function to check permission
  const archive = ngoId => {
    return FirebaseNgos.doc(ngoId).set({ archived: true }, { merge: true })
  }

  const update = (ngoId, ngoInfo) => {
    return FirebaseNgos.doc(ngoId).update(ngoInfo)
  }

  const findOne = ngoId => {
    return FirebaseNgos.doc(ngoId).get()
  }

  const findByNgoPeriod = (date) => {
    const period = `${date.getFullYear()}-${date.getMonth()}`
    return FirebaseNgos.where('period', '==', period).limit(1).get()
  }

  const findAll = (active = true) => {
    let query = FirebaseNgos.where('archived', '==', false)
    return query.orderBy('period')
  }


  // TODO: Move to server function to check permissions
  const unarchive = ngoId => {
    return FirebaseNgos.doc(ngoId).set({ archived: false }, { merge: true })
  }

  return Object.freeze({
    add,
    archive,
    update,
    findOne,
    findAll,
    findByNgoPeriod,
    unarchive
  })
}

const Ngos = ngosDb()

export { Ngos }
