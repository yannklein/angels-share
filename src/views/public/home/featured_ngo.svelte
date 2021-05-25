<style>
  .featured-ngo-container {
    padding: 64px;
    color: white;
  }
  .featured-ngo-container h2 {
    margin: 0;
    margin-top: 48px;
    margin-bottom: 102px;
    text-align: center;
  }
  .featured-ngo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 400px;
  }
  .featured-ngo-card {
    color: #607d8b;
    font-size: 24px;
    width: 100%;
    margin-right: 32px;
  }
  .featured-ngo-card p {
    margin: 0;
    text-align: justify;
  }
  .featured-ngo-card-title {
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: 32px;
  }
  .featured-ngo-card-title h3 {
    margin: 0;
  }
  .featured-ngo-card-title img {
    background-color: #607d8b;
    object-fit: cover;
    height: 100%;
    margin-left: 16px;
    padding: 4px;
  }
  /* .featured-ngo-icon {
    font-size: 120px;
    margin: 0;
  } */
  .featured-ngo iframe {
    width: 100%;
    height: 100%;
    min-height: 400px;
    box-shadow: 0 0 16px #607d8b;
  }
  @media (max-width: 1000px) {
    .featured-ngo-container {
      padding: 64px;
    }
    .featured-ngo {
      flex-direction: column;
      height: unset;
    }
    .featured-ngo-card {
      margin-right: 0;
      margin-bottom: 32px;
    }

  }
</style>

<script>
  export let currentNgo = {}
  export let ngoLoaded = {}
</script>

<div class="featured-ngo-container">
  {#if ngoLoaded}
  <!-- <div style="color: black">This: {JSON.stringify(currentNgo)}</div> -->
  <h2>This month's NGO {currentNgo.flag}</h2>
  <div class="featured-ngo">
    <div class="featured-ngo-card">
      <a class="featured-ngo-card-title" href={currentNgo.donation_url} target="_blank">
        <h3>{currentNgo.name}</h3>
        <img src={currentNgo.logo_url} alt="ngo logo">
      </a>
      <p>{currentNgo.description}</p>
    </div>
    <iframe title="ngo preview" src={currentNgo.teaser_url} frameborder="0"></iframe>
  </div>
  {/if}
</div>
