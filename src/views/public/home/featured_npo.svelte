<style>
  .featured-npo-container {
    padding: 64px;
    color: white;
  }
  
  @media (max-width: 1000px) {
    .featured-npo-container {
      padding: 64px;
    }
  }
</style>

<script>
  import NpoInfo from '../../shared/npo_info.svelte'
  // console.log("locale:", $locale)
</script>

<div class="featured-npo-container">
    <NpoInfo />
</div>
