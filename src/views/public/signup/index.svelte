<script>
  import { Navigate } from 'svelte-router-spa'

  import SignupForm from './form.svelte'
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
              <h3 class="center-align mt10">One step away from becoming an angel 🕊</h3>
            </div>
          </div>
          <div class="card-content">
            <SignupForm />
            <p>
              <Navigate to="login"><span style="color:black">Already have an account? Log in</span></Navigate>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
