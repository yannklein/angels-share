<style>
  h2 {
    margin: 0;
    margin-top: 48px;
    margin-bottom: 102px;
    text-align: center;
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
    height: 100%;
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

<script>
  import { _ } from '../../locales/i18n';
  import { locale } from 'svelte-i18n'
  import { currentNpo } from '../../stores/npo';

  let npoLoaded = false;

  currentNpo.init();

  $: if (Object.keys($currentNpo).length === 0) {
    console.log("npo not loaded yet")
    npoLoaded = false;
  } else {
    console.log("npo loaded", $currentNpo)
    npoLoaded = true;
  }

</script>

{#if npoLoaded}
<h2>{$_('home.featured_npo.title')} {$currentNpo.flag}</h2>
<div class="featured-npo">
  <div class="featured-npo-card">
    <a class="featured-npo-card-title" href={$locale == "fr" ? $currentNpo.donation_url_fr : $currentNpo.donation_url} target="_blank">
      <h3>{$locale == "fr" ? $currentNpo.name_fr : $currentNpo.name}</h3>
      <img src={$currentNpo.logo_url} alt="npo logo">
    </a>
    <p>{$locale == "fr" ? $currentNpo.description_fr : $currentNpo.description}</p>
  </div>
  <iframe title="npo preview" src={$locale == "fr" ? $currentNpo.teaser_url_fr : $currentNpo.teaser_url} frameborder="0"></iframe>
</div>
{/if}