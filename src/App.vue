<template>
  <div id="app">
    <header>
      <nav>
        <img src="./assets/logo.png" alt="WWE Network" />
        <ul>
          <li>Redeem Prepaid Card</li>
          <li>Login</li>
        </ul>
        <button type="button" class="btn btn-danger">Join Now</button>
      </nav>
    </header>

    <article>
      <hr />
      <h1>The ONLY place to watch SummerSlam, WrestleMania and thousands of hours of WWE video on demand.</h1>
      <div class="row">
        <div class="col-md-6">
          <button type="button" class="btn btn-danger">Join Free for a Month</button>
          <small>No commitment, cancel anytime</small>
        </div>
        <div class="col-md-6">
          <img src="./assets/summerslam.png" alt="Summer Slam">
          <strong>LIVE</strong>
          This Sunday 7e/4p
        </div>
        <img src="./assets/downarrow.png" alt="Scroll down">
      </div>
    </article>

    <footer>
      <div class="row">
        <div class="col-md-4">
          <strong>For just $9.99 per month,</strong> WWE Network includes every pay-per-view event live at no additional cost
        </div>
        <div class="col-md-4">
          <strong>Unlimited access</strong> — anywhere, anytime, on any device
        </div>
        <div class="col-md-4">
          <strong>First month FREE</strong> — No commitment, cancel anytime
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
