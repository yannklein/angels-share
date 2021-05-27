<script>
  import { currentNpo } from '../../../stores/npo';
  import { _ } from '../../../locales/i18n';
  import NpoInfo from '../../shared/npo_info.svelte'
  
  currentNpo.init();

  let npoLoaded = false;

  $: if (Object.keys($currentNpo).length === 0) {
    console.log("npo not loaded yet")
    npoLoaded = false;
  } else {
    console.log("npo loaded", $currentNpo)
    npoLoaded = true;
  }
</script>

<style>
  .featured-npo-container {
    color: white;
  }
  .featured-npo-container h2 {
    margin: 64px 0;
  }
  .featured-npo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 400px;
  }
  .featured-npo-card {
    color: #607d8b;
    font-size: 24px;
    width: 100%;
    margin-right: 32px;
  }
  .featured-npo-card p {
    margin: 0;
    text-align: justify;
  }
  .featured-npo-card-title {
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: 32px;
  }

  .featured-npo-card-title h3 {
    margin: 0;
  }
  .featured-npo-card-title img {
    background-color: #607d8b;
    object-fit: cover;
    height: 2.5em;
    margin-left: 16px;
    padding: 4px;
  }
  /* .featured-npo-icon {
    font-size: 120px;
    margin: 0;
  } */
  .featured-npo iframe {
    width: 100%;
    height: 100%;
    min-height: 400px;
    box-shadow: 0 0 16px #607d8b;
  }
  @media (max-width: 1000px) {
    .featured-npo-container {
      padding: 64px;
    }
    .featured-npo {
      flex-direction: column;
      height: unset;
    }
    .featured-npo-card {
      margin-right: 0;
      margin-bottom: 32px;
    }

  }
</style>
<div class="masonry row">
  <div class="col s11">
    <div class="featured-npo-container">
      <NpoInfo />
    </div>
  </div>
</div>