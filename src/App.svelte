<script>
  import { Router } from 'svelte-router-spa'
  import { routes } from './routes'
  import '../node_modules/materialize-css/dist/css/materialize.min.css'
  import '../node_modules/materialize-css/dist/js/materialize.min.js'
  // import { initI18N } from './locales/i18n'
  // initI18N();
  import { setupI18n } from './locales/i18n';
  setupI18n();
</script>

<Router {routes} />
