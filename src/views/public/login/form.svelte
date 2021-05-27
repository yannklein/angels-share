<script>
  import { navigateTo } from 'svelte-router-spa'
  import validate from 'validate.js'
  import PasswordInput from '../../components/forms/password_input.svelte'
  import EmailInput from '../../components/forms/email_input.svelte'
  import FormButtons from '../../components/forms/buttons.svelte'
  import { notificationMessage } from '../../../stores/notification_message.js'
  import { Auth } from '../../../config/firebase'
  import { _ } from '../../../locales/i18n';

  const loginConstraints = {
    email: {
      presence: true,
      email: true
    },
    password: {
      presence: true,
      length: {
        minimum: 6,
        message: $_('login.char_limit')
      }
    }
  }

  let email = ''
  let emailError = false
  let emailMessage = ''
  let passwordMessage = ''
  let password = ''
  let passwordError = false
  let disableAction = false

  const resetErrorInfo = () => {
    let emailError = false
    let emailMessage = ''
    let passwordMessage = ''
    let passwordError = false
  }

  const validateLoginForm = () => {
    resetErrorInfo()
    const validationResult = validate({ email, password }, loginConstraints)
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
    }

    return false
  }

  const signInUser = () => {
    disableAction = true
    validateLoginForm()
    if (validateLoginForm()) {
      Auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          notificationMessage.set({ message: $_('login.hi_back'), type: 'success-toast' })
          disableAction = false
          navigateTo('/profile')
        })
        .catch(error => {
          notificationMessage.set({ message: error.message, type: 'danger-toast' })
          disableAction = false
        })
    } else {
      disableAction = false
    }
  }
</script>

<form ref="form" on:submit|preventDefault={signInUser}>
  <EmailInput bind:value={email} error={emailError} isFocused={true} errorMessage={emailMessage} />
  <PasswordInput bind:value={password} error={passwordError} errorMessage={passwordMessage} />
  <FormButtons cancelButton={false} submitText={$_('login.login')} isLoading={disableAction} />
</form>
