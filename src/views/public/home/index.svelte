<script>
  import { onMount } from 'svelte'
  import Menu from './menu.svelte'
  import Hero from './hero.svelte'
  import MainFeatures from './main_features.svelte'
  import HowToUseIt from './how_to_use_it.svelte'
  import Technology from './technology.svelte'
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
  <MainFeatures />
  <Footer />
</div>
