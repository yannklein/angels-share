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

<div class="featured-ngo-container">
  <h2>This month's NGO 🇾🇪</h2>
  <div class="featured-ngo">
    <div class="featured-ngo-card">
      <div class="featured-ngo-card-title">
        <h3>WPF for Yemen</h3>
        <img src="https://www.wfp.org/themes/custom/wfp_org/images/logos/UNWFP-logo-vertical-white-en.svg?v=3" alt="ngo logo">
      </div>
      <p>The current level of hunger in Yemen is unprecedented and is causing severe hardship for millions of people. Despite ongoing humanitarian assistance, 16.2 million Yemenis are food insecure.</p>
      <p>Aiming to feed 13 million of the most vulnerable people each month, WFP’s emergency response in Yemen is our largest anywhere in the world.</p> 
    </div>
    <iframe title="ngo preview" src="https://www.wfpusa.org/countries/yemen/" frameborder="0"></iframe>
  </div>
</div>
