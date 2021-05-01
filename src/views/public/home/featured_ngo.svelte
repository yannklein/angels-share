<style>
  .featured-ngo-container {
    padding: 64px;
    color: white;
  }
  .featured-ngo-container h2 {
    margin: 0;
    margin-bottom: 32px;
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
  }
  .featured-ngo-icon {
    font-size: 120px;
    margin: 0;
  }
  .featured-ngo iframe {
    width: 100%;
    height: 100%;
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
  <h2>This month's NGO 🇱🇧</h2>
  <div class="featured-ngo">
    <div class="featured-ngo-card">
      <div class="featured-ngo-card-title">
        <h3>Baytna Baytak</h3>
        <img src="https://baytnabaytak.com/wp-content/uploads/2021/01/Baytna-Baytak-Loog-1-02.png" alt="ngo logo">
      </div>
      <p>Baytna Baytak is a social initiative launched by young, dynamic, and independent Lebanese individuals. Their mission was primarily to secure housing for healthcare professionals working at the forefront of the fight against the Covid-19 pandemic.</p>
    </div>
    <iframe src="https://baytnabaytak.com/" frameborder="0"></iframe>
  </div>
</div>
