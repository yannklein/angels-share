<script>
  import { Navigate } from 'svelte-router-spa'
  import LoginForm from './form.svelte'
  import { _ } from '../../../locales/i18n';

</script>

<style>
  .mt10 {
    padding-top: 1rem;
  }
</style>

<main>
  <div class="container">
    <div class="row">
      <div class="col s8 offset-s2">
        <div class="card card-login">
          <div class="card-login-splash">
            <div class="wrapper">
              <h3 class="center-align mt10">{$_('login.title')}</h3>
            </div>
          </div>
          <div class="card-content">
            <span class="card-title center-align">{$_('login.login')}</span>
            <LoginForm />
            <p>
              <Navigate to="signup">{$_('login.signup_btn')}</Navigate>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
