<template>
  <div id="app">
    <header class="fixed-top">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-2">
            <img class="logo w-100" src="./assets/logo.png" alt="WWE Network" />
          </div>
          <div class="col-12 col-md-auto text-right ml-auto">
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
            <div class="col-md-5 offset-md-1 col-12">
              <div class="float-md-right left-col">
                <button type="button" class="btn btn-danger btn-lg">Join Free for a Month</button>
                <small>No commitment, cancel anytime</small>
              </div>
            </div>
            <div class="col-md-6 right-col text-left col-12">
              <div class="d-flex justify-content-center justify-content-md-start">
                <img class="col-6 col-md-auto align-self-center" src="./assets/summerslam.png" alt="Summer Slam">

                <div class="col-auto right-text">
                  <strong>LIVE</strong><br />
                  This Sunday<br />7e/4p
                </div>
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
        <div class="col-md-4 col-12 footer-card">
          <strong>For just $9.99 per month,</strong> WWE Network includes every pay-per-view event live at no additional cost
        </div>
        <div class="col-md-4 col-12 footer-card">
          <strong>Unlimited access</strong> — anywhere, anytime, on any device
        </div>
        <div class="col-md-4 col-12 footer-card">
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
    @media (min-width: 768px) {
      width: 82%;
    }

    .row {
      padding-top: 22px;
      align-items: center;
      padding-bottom: 15px;

      @media (min-width: 768px) {
        height: 85px;
      }
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
    background-color: red;
    width: 82%;
    height: 3px;
    margin-bottom: 36px;
    margin-top: 151px;

    @media (min-width: 768px) {
      margin-top: 451px;
    }
  }

  h1 {
    font-size: 3rem;
    max-width: 885px;
    margin: 0px auto;
  }

  .join-row {
    padding-top: 20px;

    @media (min-width: 768px) {
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
    }

    .left-col {
      @media (min-width: 768px) {
        padding: 22px 24px;
      }

      button.btn-lg {
        display: block;
        font-size: 1.7rem;
        padding: 19px 26px;
        margin-bottom: 10px;

        @media (max-width: 768px) {
          margin: 0px auto;
        }
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

      @media (max-width: 768px) {
        margin: 0px auto;
      }

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
    align-items: center;
    margin-top: 20px;

    @media (min-width: 768px) {
      margin-top: 80px;
    }
  }
}

footer {
  background: linear-gradient(#363e54, #564a4e);

  .row {
    align-items: center;
    padding: 45px 25px;
    text-align: left;

    @media (min-width: 768px) {
      display: table;
      width: 82%;
      margin: 0px auto;

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
  }

  .footer-card {
    padding: 15px 44px 15px 82px;
    font-size: 1.38em;
    line-height: 1.15;
    font-weight: lighter;
    vertical-align: middle;

    @media (min-width: 768px) {
      height: 110px;
      display: table-cell;
      width: 33.33333333%;
    }
  }
}

button.btn {
    background-color: #ea1a29;
}
</style>