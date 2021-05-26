<style>
  .features-container {
    padding: 64px;
    color: white;
    text-align: center;
  }
  .features-container h2 {
    margin-bottom: 80px;
    color: white;
  }
  .reasons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .reasons-card {
    color: white;
    font-size: 24px;
    width: 300px;
  }
  .reasons-card p {
    margin: 0;
  }
  .reasons-icon {
    font-size: 120px;
    margin: 0;
  }
  @media (max-width: 1000px) {
    .features-container {
      padding: 64px;
    }
    .reasons {
      flex-direction: column;
    }
  }
</style>

<script>
  import { _ } from '../../../locales/i18n';
</script>

<div class="features-container  primary-toast">
  <h2>{$_('home.main_features.title')}</h2>
  <div class="reasons">
    <div class="reasons-card">
      <p class="reasons-icon"><i class="fas fa-map-signs"></i></p>
      <p>{$_('home.main_features.reason-1')}</p>
    </div>
    <div class="reasons-card">
      <p class="reasons-icon"><i class="fas fa-hourglass-end"></i></p>
      <p>{$_('home.main_features.reason-2')}</p>
    </div>
    <div class="reasons-card">
      <p class="reasons-icon">😍</p>
      <p>{$_('home.main_features.reason-3')}</p>
    </div>
  </div>
</div>
