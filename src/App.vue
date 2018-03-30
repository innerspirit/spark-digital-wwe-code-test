<template>
  <div id="app">
    <header class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <img class="logo" src="./assets/logo.png" alt="WWE Network" />
        </div>
        <div class="col-md-4 offset-6 text-right">
          <a href="#">Redeem Prepaid Card</a> | <a href="#">Login</a>
          <button type="button" class="btn btn-danger">Join Now</button>
        </div>
      </div>
    </header>

    <article class="container-fluid">
      <div class="row">
        <div class="col-md-8 offset-2">
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
        </div>
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

<style lang="scss">
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: black;

  a {
    color: white;

    &hover {
      text-decoration: underline;
    }
  }
}

header.container-fluid {
  background-color: rgba(0, 0, 0, 0.5);
  width: 1370px;

  .row {
    height: 85px;
    padding-top: 22px;
    align-items: center;
  }

  button {
    margin-left: 15px;
    padding-left: 17px;
    padding-right: 17px;
  }
}

article {
  height: 800px;
  background: top center no-repeat url('./assets/fighters.jpg');

  hr {
    margin-top: 400px;
    background-color: red;
    width: 750px;
    height: 3px;
  }

}
</style>
