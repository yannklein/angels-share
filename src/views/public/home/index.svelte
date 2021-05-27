<script>
  import { onMount } from 'svelte'
  import Menu from './menu.svelte'
  import Hero from './hero.svelte'
  import MainFeatures from './main_features.svelte'
  import FeaturedNpo from './featured_npo.svelte'
  import Footer from '../layout/footer.svelte'
  import { currentUser } from '../../../stores/current_user'

  let loggedIn = false;

  $: if (Object.keys($currentUser).length === 0) {
    console.log($currentUser)
    loggedIn = false
  } else {
    console.log($currentUser)
    loggedIn = true
  }

  onMount(() => {
    console.log('index -> on mount')
  })
</script>

<div>
  <Menu loggedIn={loggedIn}/>
  <Hero />
  <FeaturedNpo/>
  <MainFeatures />
  <Footer />
</div>
