import { notificationMessage } from '../../stores/notification_message.js'

const addUser = userInfo => {
  Users.add(userInfo).then(
    notificationMessage.set({
      message: 'User created successfully.',
      type: 'success-toast'
    })
  )
}

const editUser = (userId, userInfo) => {
  Users.update(userId, userInfo).then(
    notificationMessage.set({
      message: 'User updated successfully.',
      type: 'success-toast'
    })
  )
}

export { addUser, editUser }
