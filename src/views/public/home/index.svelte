<script>
  import { onMount } from 'svelte'
  import Menu from './menu.svelte'
  import Hero from './hero.svelte'
  import MainFeatures from './main_features.svelte'
  import FeaturedNgo from './featured_ngo.svelte'
  import Footer from '../layout/footer.svelte'
  import { currentUser } from '../../../stores/current_user';
  import { currentNgo } from '../../../stores/ngo';

  let loggedIn = false;
  let ngoLoaded = false;

  currentNgo.init();

  $: if (Object.keys($currentNgo).length === 0) {
    console.log("ngo not loaded yet")
    ngoLoaded = false;
  } else {
    console.log("ngo loaded", $currentNgo)
    ngoLoaded = true;
  }

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
  <FeaturedNgo ngoLoaded={ngoLoaded} currentNgo={$currentNgo}/>
  <MainFeatures />
  <Footer />
</div>
