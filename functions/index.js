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
    .then((userQuerySnapshot) => {
      userQuerySnapshot.forEach((userDoc) => {
        const userInfo = userDoc.data()
        const date = new Date();
        const period = `${date.getFullYear()}-${date.getMonth()}`
        // eslint-disable-next-line promise/no-nesting
        firestore
          .collection('ngos')
          .where('period', '==', period)
          .get()
          .then((ngoQuerySnapshot) => {
            ngoQuerySnapshot.forEach((ngoDoc) => {
              const ngoInfo = ngoDoc.data();
              // eslint-disable-next-line promise/no-nesting
              firestore
                .collection("mails")
                .add({
                  to: userInfo.email,
                  message: {
                    subject: "Discover this month Angel's share NGO",
                    html: `<div style="padding: 16px">
                      <p>Hi ${userInfo.name},</p>
                      <p>Discover the NGO featured this month:</p>
                      <div style="margin-top: 32px; display: flex;align-items: center; margin-bottom: 8px;">
                        <h2>${ngoInfo.name} ${ngoInfo.flag}</h2>
                        <img style="height: 24px; padding: 4px; margin-left: 8px; background-color: #607d8b;" src="${ngoInfo.logo_url}" alt="logo">
                      </div>
                      <div style="margin-bottom: 32px">
                        <p>${ngoInfo.description}</p>
                      </div>
                      <div style="margin-bottom: 32px">
                        <p style="margin: 0" >Discover more and donate on their <a href="${ngoInfo.donation_url}">donation page</a></p>
                        <p style="margin: 0" >Manage your Angel's share profile <a href="https://the-angels-share.web.app/">here</a></p>
                      </div>
                      <p style="margin: 0">Have a great month! 🕊</p>
                      <p style="margin: 0">Yann from Angel's Share</p></div></body>`,
                  },
                })
                .then(() => console.log("Queued email for delivery!"))
                .catch();
            });
            return null;
          })
          .catch();
      })
      return null;
    })
    .catch();

  return null;
});