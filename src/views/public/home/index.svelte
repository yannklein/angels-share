<script>
  import { onMount } from 'svelte'
  import Menu from './menu.svelte'
  import Hero from './hero.svelte'
  import MainFeatures from './main_features.svelte'
  import FeaturedNgo from './featured_ngo.svelte'
  import Footer from '../layout/footer.svelte'

  onMount(() => {
    console.log('index -> on mount')
    // const elems = document.querySelectorAll('.parallax')
    // M.Parallax.init(elems, {})
  })

  setTimeout(() => {
    const elems = document.querySelectorAll('.parallax')
    M.Parallax.init(elems, {})
  }, 300)
</script>

<style>
  .parallax {
    height: 750px;
  }
  .all-width {
    width: 100%;
  }
</style>

<div>
  <Menu />
  <Hero />
  <FeaturedNgo />
  <MainFeatures />
  <Footer />
</div>
