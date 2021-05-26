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
  import { _ } from '../../../locales/i18n';

  const signupConstraints = {
    name: {
      presence: true,
      length: {
        minimum: 4,
        message: $_('sign_up.char_limit-4')
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
        message: $_('sign_up.char_limit')
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
      lineMessage = $_('sign_up.line_needed')
      lineError = true
      return false
    }
    if (whatsapp_subs && whatsapp_id === "") {
      whatsappMessage = $_('sign_up.phone_needed')
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
              message: $_('sign_up.account created'),
              type: 'success-toast'
            })
            currentUser.set(userInfo);

            navigateTo('/profile')
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
    label={$_('sign_up.your_name')}
    icon="person"
    isFocused={true}
    errorMessage={nameMessage} />
  <EmailInput bind:value={email} error={emailError} errorMessage={emailMessage} />
  <PasswordInput bind:value={password} error={passwordError} errorMessage={passwordMessage} />
  <span class="card-title center-align">{$_('sign_up.donation_msg_txt')}</span>
  <CheckBox
    bind:checked={email_subs}
    id="email_subs_chbox"
    label={$_('sign_up.send_mail')} />
  <CheckBox
    bind:checked={line_subs}
    id="line_subs_chbox"
    label={$_('sign_up.send_line')} />
  <TextInput
    bind:value={line_id}
    error={lineError}
    label={$_('sign_up.your_line')}
    errorMessage={lineMessage} />
  <CheckBox
    bind:checked={whatsapp_subs}
    id="whatsapp_subs_chbox"
    label={$_('sign_up.send_whatsapp')} />
  <TextInput
    bind:value={whatsapp_id}
    error={whatsappError}
    label={$_('sign_up.your_whatsapp')}
    errorMessage={whatsappMessage} />
  <FormButtons cancelButton={false} submitText={$_('sign_up.create_acc')} isLoading={disableAction} />
</form>
