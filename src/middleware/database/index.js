import { Firestore } from '../../config/firebase'
// import FirebaseResults from './firebase_results'

// const FirebaseEmployees = Firestore.collection('employees')
// const FirebaseTeams = Firestore.collection('teams')
const FirebaseUsers = Firestore.collection('users')
const FirebaseNpos = Firestore.collection('npos')

export { FirebaseUsers, FirebaseNpos}
