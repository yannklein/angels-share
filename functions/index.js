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

exports.scheduledMail = functions.region('europe-west1').pubsub.schedule('11 0 1 * *')
.timeZone('CET').onRun((context) => {
  console.log('This will be run every months!');
  firestore
    .collection('users')
    .where('email_subs', '==', true)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const userInfo = doc.data()
        // eslint-disable-next-line promise/no-nesting
        firestore
          .collection("mails")
          .add({
            to: userInfo.email,
            message: {
              subject: "Discover this month Angel's share NGO",
              html: "Checkout the NGO details here. And jump there to donate.",
            },
          })
          .then(() => console.log("Queued email for delivery!"))
          .catch();
      })
      return null;
    })
    .catch();

  return null;
});