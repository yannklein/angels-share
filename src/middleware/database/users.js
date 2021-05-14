import { FirebaseUsers } from './index'

const usersDb = () => {
  const add = _userInfo => {
    return false
    // return FirebaseUsers.add(userInfo)
  }

  // TODO: Move to server function to check permission
  const archive = userId => {
    return FirebaseUsers.doc(userId).set({ active: false }, { merge: true })
  }

  const update = (userId, userInfo) => {
    delete userInfo.email
    delete userInfo.password
    return FirebaseUsers.doc(userId).update(userInfo)
  }

  const findOne = userId => {
    return FirebaseUsers.doc(userId).get()
  }

  const findByUserId = userId => {
    return FirebaseUsers.where('uid', '==', userId).limit(1).get()
  }

  const findAll = (active = true) => {
    let query = FirebaseUsers.where('active', '==', active)
    return query.orderBy('name')
  }


  // TODO: Move to server function to check permissions
  const unarchive = userId => {
    return FirebaseUsers.doc(userId).set({ active: true }, { merge: true })
  }

  return Object.freeze({
    add,
    archive,
    update,
    findOne,
    findAll,
    findByUserId,
    unarchive
  })
}

const Users = usersDb()

export { Users }
