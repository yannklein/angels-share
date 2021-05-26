<script>
  import { Navigate } from 'svelte-router-spa'
  import { _ } from '../../../locales/i18n';
</script>

<style>
  .hero-container {
    padding: 64px 160px;
    color: white;
  }
  .hero-container h1 {
    color: white;
    margin-bottom: 64px;
  }
  .hero-container .highlighted {
    text-shadow: 0 0 16px white;
    font-weight: bold;
  }
  .hero-container h3 {
    margin: 0;
    color: white;
  }
  .hero-container .steps * {
    font-size: 24px;
    margin: 0;
  }
  /*.hero-container ol {
    font-size: 24px;
  }*/
  .hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .hero-btn-white {
    padding: 24px 48px;
    border-radius: 8px;
    background-color: white;
    color: #607d8b;
    font-size: 32px;
    font-weight: bold;
    transition: box-shadow 3s;
  }
  .hero-btn-white:hover {
    box-shadow: 0 0 120px 120px rgb(255 255 255 / 40%);
  }

  @media (max-width: 1200px) {
    .hero-container h1 {
      font-size: 40px;
    }
    .hero-container .steps * {
      font-size: 16px;
    }
    .hero-btn-white {
      font-size: 24px;
    }
  }

  @media (max-width: 900px) {
    .hero-container {
      padding: 64px;
    }
    .hero-container h1 {
      font-size: 40px;
    }
    .hero-btn-white {
      /*font-size: 16px;*/
    }
  }

  @media (max-width: 700px) {
    .hero-container .steps {
      display: none;
    }
  }

</style>

<div class="hero-container primary-toast">
  <h1>{$_('home.hero.title')}<span class="highlighted">{$_('home.hero.title_span')}</span></h1>
  <div class="hero-content">
    <div class="steps">
      <p>{$_('home.hero.3steps')}</p>
      <ol>
        <li>{$_('home.hero.step-1')}</li>
        <li>{$_('home.hero.step-2')}</li>
        <li>{$_('home.hero.step-3')}</li>
      </ol>
    </div>
    <a href="/signup" class="hero-btn-white font-amatic">{$_('home.hero.sign_up')}</a>
  </div>

</div>
