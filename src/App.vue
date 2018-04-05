<template>
  <div id="app">
    <header class="fixed-top">
      <div class="container-fluid">
        <div class="row">
          <div class="col-2">
            <img class="logo" src="./assets/logo.png" alt="WWE Network" />
          </div>
          <div class="col-10 text-right">
            <a href="#">Redeem Prepaid Card</a> | <a href="#">Login</a>
            <button type="button" class="btn btn-danger">Join Now</button>
          </div>
        </div>
      </div>
    </header>

    <article class="container-fluid">
      <div class="row">
        <div class="col-md-8 offset-md-2 col-10 offset-1">
          <hr />
          <h1>The ONLY place to watch SummerSlam, WrestleMania and thousands of hours of WWE video on demand.</h1>
          <div class="row join-row">
            <div class="col-md-5 offset-md-1 col-6">
              <div class="float-right left-col">
                <button type="button" class="btn btn-danger btn-lg">Join Free for a Month</button>
                <small>No commitment, cancel anytime</small>
              </div>
            </div>
            <div class="col-6 right-col text-left">
              <img src="./assets/summerslam.png" alt="Summer Slam">

              <div class="container right-text">
                <div class="row"><strong>LIVE</strong></div>
                <div class="row">This Sunday<br />7e/4p</div>
              </div>
            </div>
            <div class="container down-arrow">
              <img src="./assets/downarrow.png" alt="Scroll down">
            </div>
          </div>
        </div>
      </div>
    </article>

    <footer>
      <div class="row">
        <div class="col-4 footer-card">
          <strong>For just $9.99 per month,</strong> WWE Network includes every pay-per-view event live at no additional cost
        </div>
        <div class="col-4 footer-card">
          <strong>Unlimited access</strong> — anywhere, anytime, on any device
        </div>
        <div class="col-4 footer-card">
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
body {
  color: white;
  background-color: black;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  a {
    color: white;

    &hover {
      text-decoration: underline;
    }
  }
}

header {
  background-color: rgb(50, 50, 50);

  .container-fluid {
    width: 82%;

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
}

article {
  height: 1071px;
  margin-top: 85px;
  background: top center no-repeat url('./assets/fighters.jpg');

  hr {
    margin-top: 451px;
    background-color: red;
    width: 82%  ;
    height: 3px;
    margin-bottom: 36px;
  }

  h1 {
    font-size: 3rem;
    max-width: 885px;
    margin: 0px auto;
  }

  .join-row {
    padding-top: 20px;

    > :first-child:after {
      content: " ";
      position: absolute;
      border-left: 1px grey solid;
      top: 11%;
      right: -4px;
      height: 65%;
      margin-top: auto;
      margin-bottom: auto;
    }

    .left-col {
      padding: 22px 24px;

      button.btn-lg {
        display: block;
        font-size: 1.7rem;
        padding: 19px 26px;
        margin-bottom: 10px;
      }

      small {
        font-size: 1.2rem;
        font-weight: lighter;
        font-style: italic;
        color: #c3b3ac;
      }
    }

    .right-col {
      padding-left: 37px;
      font-size: 1.55rem;
      line-height: 1.2;

      .right-text {
        padding-top: 31px;
        white-space: nowrap;

        strong {
          color: red;
          font-size: 1.65rem;
        }
      }

      img {
        margin-right: 30px;
        float: left;
      }
    }
  }

  .down-arrow {
    margin-top: 80px;
    align-items: center;
  }
}

footer {
  background: linear-gradient(#363e54, #564a4e);

  .row {
    align-items: center;
    padding: 45px 25px;
    text-align: left;
    display: table;

    > :not(:last-child):after {
      content: " ";
      position: absolute;
      border-left: 2px white solid;
      top: 2px;
      right: -4px;
      height: 99px;
      margin-top: auto;
      margin-bottom: auto;
    }
  }

  .footer-card {
    padding: 15px 44px 15px 82px;
    font-size: 1.38em;
    line-height: 1.15;
    display: table-cell;
    font-weight: lighter;
    width: 33.33333333%;
    height: 110px;
    vertical-align: middle;
  }
}

button.btn {
    background-color: #ea1a29;
}
</style>