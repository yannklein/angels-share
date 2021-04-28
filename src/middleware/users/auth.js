import { currentUser } from '../../stores/current_user'
import { Auth } from '../../config/firebase'
import { Users } from '../database/users'

Auth.onAuthStateChanged(() => {
  if (Auth.currentUser) {
    const userInfo = {
      email: Auth.currentUser.email,
      id: Auth.currentUser.uid
    }

    Users.findOne(Auth.currentUser.uid).then(doc => {
      userInfo.name = doc.data().name

      Auth.currentUser.getIdTokenResult().then(idToken => {
        userInfo.isAdmin = idToken.claims.role === 'admin' || idToken.claims.role === 'superAdmin'

        currentUser.set(userInfo)
      })
    })
  } else {
    currentUser.set({ id: 0 })
  }
})
