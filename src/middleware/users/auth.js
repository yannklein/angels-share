import { currentUser } from '../../stores/current_user'
import { Auth } from '../../config/firebase'
import { Users } from '../database/users'

Auth.onAuthStateChanged(() => {
  if (Auth.currentUser) {
    // const userInfo = {
    //   email: Auth.currentUser.email,
    //   id: Auth.currentUser.uid
    // }

    // console.log("id:", Auth.currentUser.uid)

    Users.findByUserId(Auth.currentUser.uid).then(querySnapshot => {
      querySnapshot.forEach((doc) => {
        const userInfo = doc.data()
        
        Auth.currentUser.getIdTokenResult().then(idToken => {
          userInfo.isAdmin = idToken.claims.role === 'admin' || idToken.claims.role === 'superAdmin'
          
          // console.log({userInfo});
          currentUser.set(userInfo)
          // console.log({currentUser});
        })
      });
    })
  } else {
    currentUser.set({ id: 0 })
  }
})
