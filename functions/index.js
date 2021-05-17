const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const firestore = admin.firestore()
firestore.settings({ timestampsInSnapshots: true })

exports.createUser = functions.region('europe-west1').https.onCall(async (data, context) => {
  const userInfo = data;
  firestore.collection('users').doc(userInfo.uid).set(userInfo)
})

exports.editUser = functions.region('europe-west1').https.onCall(async (data, context) => {
  const userInfo = data;
  firestore.collection('users').doc(userInfo.uid).update(userInfo)
})
