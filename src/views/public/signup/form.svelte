<script>
  import { navigateTo } from 'svelte-router-spa'
  import validate from 'validate.js'
  import { Auth, Functions } from '../../../config/firebase'

  import TextInput from '../../components/forms/text_input.svelte'
  import PasswordInput from '../../components/forms/password_input.svelte'
  import EmailInput from '../../components/forms/email_input.svelte'
  import FormButtons from '../../components/forms/buttons.svelte'
  import CheckBox from '../../components/forms/check_box.svelte'

  import { notificationMessage } from '../../../stores/notification_message.js'

  import { Users } from '../../../middleware/database/users'

  import { currentUser } from '../../../stores/current_user'

  const signupConstraints = {
    name: {
      presence: true,
      length: {
        minimum: 4,
        message: 'must be at least 4 characters'
      }
    },
    email: {
      presence: true,
      email: true
    },
    password: {
      presence: true,
      length: {
        minimum: 6,
        message: 'must be at least 6 characters'
      }
    }
  }

  let name = ''
  let nameError = false
  let nameMessage = ''
  let email = ''
  let emailError = false
  let emailMessage = ''
  let passwordMessage = ''
  let password = ''
  let passwordError = false
  let disableAction = false

  let email_subs = false
  let whatsapp_subs = false
  let line_subs = false

  let whatsapp_id = ""
  let line_id = ""

  let lineError = false
  let lineMessage = ""

  let whatsappError = false
  let whatsappMessage = ""

  const resetErrorInfo = () => {
    let nameError = false
    let nameMessage = ''
    let emailError = false
    let emailMessage = ''
    let passwordMessage = ''
    let passwordError = false
  }

  const validateLoginForm = () => {
    resetErrorInfo()
    if (line_subs && line_id === "") {
      lineMessage = "Line ID needed!"
      lineError = true
      return false
    }
    if (whatsapp_subs && whatsapp_id === "") {
      whatsappMessage = "Phone number needed!"
      whatsappError = true
      return false
    }
    const validationResult = validate({ name, email, password }, signupConstraints)
    if (!validationResult) {
      return true
    } else {
      if (validationResult.email && validationResult.email.length > 0) {
        emailMessage = validationResult.email[0]
        emailError = true
      }
      if (validationResult.password && validationResult.password.length > 0) {
        passwordMessage = validationResult.password[0]
        passwordError = true
      }
      if (validationResult.name && validationResult.name.length > 0) {
        nameMessage = validationResult.name[0]
        nameError = true
      }
    }

    return false
  }

  const signInUser = async () => {
    disableAction = true
    validateLoginForm()
    if (validateLoginForm()) {
      Auth.createUserWithEmailAndPassword(email, password)
        .then(registeredUser => {
          const userInfo = {
            uid: registeredUser.user.uid,
            name: name,
            email: email,
            role: "user",
            active: true,
            email_subs: email_subs,
            whatsapp_subs: whatsapp_subs,
            line_subs: line_subs,
            whatsapp_id: whatsapp_id,
            line_id: line_id,
            createdAt: new Date(),
            createdBy: registeredUser.user.uid
          }
          const createUser = Functions.httpsCallable('createUser')
          createUser(userInfo)
          .then(() => {
            notificationMessage.set({
              message: 'Your account was created successfully!',
              type: 'success-toast'
            })
            currentUser.set(userInfo);

            navigateTo('/admin')
            // // We logout the user to generate a new jwt with right token info
            // Auth.signOut().then(() => {
            // })
          })
          .catch(error => {
              notificationMessage.set({ message: error.message, type: 'danger-toast' })
              console.log(error)
            })
        })
    }
  }
</script>

<form ref="form" on:submit|preventDefault={signInUser}>
  <TextInput
    bind:value={name}
    error={nameError}
    label="Your name"
    icon="person"
    isFocused={true}
    errorMessage={nameMessage} />
  <EmailInput bind:value={email} error={emailError} errorMessage={emailMessage} />
  <PasswordInput bind:value={password} error={passwordError} errorMessage={passwordMessage} />
  <span class="card-title center-align">Where should we send you donation messages?</span>
  <CheckBox
    bind:checked={email_subs}
    id="email_subs_chbox"
    label="Send via e-mail" />
  <CheckBox
    bind:checked={line_subs}
    id="line_subs_chbox"
    label="Send via Line" />
  <TextInput
    bind:value={line_id}
    error={lineError}
    label="Your line ID"
    errorMessage={lineMessage} />
  <CheckBox
    bind:checked={whatsapp_subs}
    id="whatsapp_subs_chbox"
    label="Send via Whatsapp" />
  <TextInput
    bind:value={whatsapp_id}
    error={whatsappError}
    label="Your phone number for Whatsapp"
    errorMessage={whatsappMessage} />
  <FormButtons cancelButton={false} submitText="Create account" isLoading={disableAction} />
</form>
