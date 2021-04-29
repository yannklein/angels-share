<style>
  .features-container {
    padding: 64px;
    color: white;
    text-align: center;
  }
  .features-container h2 {
    margin-bottom: 80px;
  }
  .reasons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .reasons-card {
    color: #607d8b;
    font-size: 24px;
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

<div class="features-container">
  <h2>If you want to help people 💪</h2>
  <div class="reasons">
    <div class="reasons-card">
      <p class="reasons-icon"><i class="fas fa-map-signs"></i></p>
      <p>But don't really know how...</p>
    </div>
    <div class="reasons-card">
      <p class="reasons-icon"><i class="fas fa-hourglass-end"></i></p>
      <p>or even can't find the time...</p>
    </div>
    <div class="reasons-card">
      <p class="reasons-icon">😍</p>
      <p>Angel's share is for you!</p>
    </div>
  </div>
</div>
