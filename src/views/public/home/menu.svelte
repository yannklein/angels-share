<style>
  .navbar-item {
    color: #444;
  }
  .navbar-vanilla {
    display: flex;
    height: 96px;
    align-items: center;
    justify-content: space-between;
    background-color: white;
  }

  .navbar-vanilla a {
    text-decoration: none;
    color: rgb(40,40,40);
    font-size: 20px;
  }

  .navbar-vanilla-section {
    display: flex;
    align-items: center;
  }

  .navbar-vanilla-logo {
    height: 64px;
    width: 64;
    object-fit: cover;
    object-position: 50% 50%;
    margin: 0 24px;
  }

  .navbar-vanilla-brand {
    margin: 0;
    font-size: 40px;
  }

  .navbar-vanilla-menu a {
    margin: 0 16px;
  }

  .navbar-vanilla-profile {
    position: relative;
    margin: 0 24px;
  }

  .navbar-vanilla-profile img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    cursor: pointer;
  }

  .navbar-vanilla-profile ul {
    z-index: 99;
    position: absolute;
    top: 64px;
    right: 0;
    list-style: none;
    padding: 0;
    margin: 8px 0;
    background-color: white;
    padding: 16px;
    width: max-content;
    box-shadow: 0 0 16px rgba(0,0,0,0.1);
    text-align: right;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }

  .navbar-vanilla-profile li {
    margin: 8px;
  }

  .navbar-vanilla-profile.active ul {
    opacity: 1;
    visibility: visible;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media (max-width: 576px) {
    .navbar-vanilla-brand {
      font-size: 24px;
    }

    .navbar-vanilla-menu {
      display: none;
    }

    .navbar-vanilla-profile ul {

    }
  }
</style>

<script>
  let isActive = false;
  function handleClick() {
    isActive = !isActive
  }
</script>

<div class="navbar-vanilla">
  <a class="navbar-vanilla-section" href="#">
    <img class="navbar-vanilla-logo" src="/favicon.svg" alt="logo">
    <h2 class="navbar-vanilla-brand">The Angel's Share</h2>
  </a>
  <div class="navbar-vanilla-section">
    <!-- <div class="navbar-vanilla-profile" class:active="{isActive}">
      <img src="https://avatars2.githubusercontent.com/u/26819547?s=400&amp;u=ae79d8825ad1127723641cbf32a9a7e2ec221e7f&amp;v=4" alt="" on:click={handleClick}>
      <ul>
        <li><a href="/login">Your space</a></li>
        <li><a href="http://www.yannklein.me">About the author</a></li>
      </ul>
    </div> -->
  </div>
</div>
