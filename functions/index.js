const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const firestore = admin.firestore()
firestore.settings({ timestampsInSnapshots: true })

exports.createUser = functions.region('europe-west1').https.onCall(async (data, context) => {
  const Users = firestore.collection('users')

  if (!context.auth && !context.auth.uid && !context.auth.token.role === 'admin') {
    throw new functions.https.HttpsError('unauthenticated')
  }

  const userData = data

  // if (!userData || !userData.email || !userData.name || !userData.password) {
  //   throw new functions.https.HttpsError('not-found')
  // }

  const newUser = await admin.auth().createUser({
    email: employeeData.email,
    displayName: employeeData.name,
    password: employeeData.password
  })

  if (!newUser) {
    throw new functions.https.HttpsError('not-found')
  }

  admin.auth().setCustomUserClaims(newUser.uid, {
    role: 'user'
  })

  const newUserInfo = {
    id: newUser.uid,
    email: employeeData.email,
    name: employeeData.name,
    role: 'user',
    active: true,
    createdAt: new Date(),
    createdBy: context.auth.uid
  }

  return Users.doc(newUser.uid)
    .set(newUserInfo)
    .then(() => {
      return 'ok'
    })
})
