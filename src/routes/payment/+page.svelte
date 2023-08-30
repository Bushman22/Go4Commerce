<title>Payment</title>
<body>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <!-- Google tag (gtag.js) -->
  <!-- Google tag (gtag.js) -->
  <!-- Google tag (gtag.js) -->
  <!-- Google tag (gtag.js) -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-BF47RSB0BT"
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-BF47RSB0BT");
  </script>
  <script src="dropdown.js"></script>
  <header class="header">
    <nav class="navbar">
      <logo
        ><a href="/"
          ><img
            class="logo1"
            src="\images\go4logo.png"
            alt="logo"
            style="height:32px"
          /></a
        ></logo
      >
      <ul class="nav-menu">
        <li class="nav-item">
          <a href="/features" class="nav-link">Features & Functionality</a>
        </li>
        <div class="dropdown">
          <li onclick="myFunction1()" class="dropbtn">
            Components <b>&#709;</b>
            <i class="fa fa-caret-down" />
          </li>
          <div class="dropdown-content1" id="myDropdown">
            <a href="/admin">Admin Panel</a>
            <a href="/templates">Template Design</a>
            <a href="/integrations">Integrations</a>
            <a href="/unified">Unified Shopping Cart</a>
            <a href="/payment">Payment Gateway</a>
          </div>
        </div>

        <div class="dropdown">
          <li onclick="myFunction2()" class="dropbtn">
            About Us <b>&#709;</b>
            <i class="fa fa-caret-down" />
          </li>
          <div class="dropdown-content2" id="myDropdownbutton">
            <a href="/team">Meet the Team</a>
            <a href="/resellers">Our Resellers</a>
          </div>
        </div>
        <li class="nav-item">
          <a href="/contact" class="nav-link">Contact Us</a>
        </li>
        <li class="nav-item1">
          <a href="/contact" class="nav-link1">Book a Meeting</a>
        </li>
        <li class="nav-item2">
          <a href="https://main.go4trek.com/auth/login" class="nav-link1"
            >Emmi Admin Portal</a
          >
        </li>
      </ul>
      <div class="ham" onclick="toggleClass()">
        <h1>&#9776;</h1>
      </div>
    </nav>
  </header>
  <div class="payment">
    <div class="paymentpara">
      <h1>PAYMENT <br />GATEWAY</h1>
    </div>
    <img class="img1" src="\images\Payment Gateway.png" alt="banner" />
  </div>

  <div class="multiple">
    <img
      class="multipleimage"
      src="\images\MULTIPLE AND INTERNATIONAL image.jpg"
      alt="multiple"
    />
    <div class="multiplepara">
      <h2>MULTIPLE AND<br />INTERNATIONAL</h2>
      <p>
        We create a custom connection to any payment gateway,<br />
        no matter where you are in the world, so you can take<br />
        payments online right away.
      </p>
    </div>
  </div>

  <div class="check">
    <div class="checkpara">
      <h2>CHECKOUT<br />PROCESS</h2>
      <ul>
        <li>
          <p>
            Because our payment process has been<br />tried and tested, you
            benefit from a higher<br />conversion rate.
          </p>
        </li>
        <li><h3>Conversion-optimized <br />experience</h3></li>
        <p>
          The checkout block comes with everything<br />
          you need to create a seamless checkout<br />
          experience.
        </p>
        <li><h3>A Simple User Flow</h3></li>
        <p>
          Eliminate any points of friction in the<br />
          purchasing process by clearly defined steps.
        </p>
      </ul>
    </div>
    <img
      class=" checkimage"
      src="\images\Checkout process illustration.jpg"
      alt="howitworks"
    />
  </div>

  <div class="bottom">
    <div class="bot">
      <img class="images" src="\images\Multiple Currencies.jpg" alt="MC" />
      <h3>Multiple Currencies</h3>
      <p>
        Offer your customers the option of viewing<br />
        prices in their own currency.
      </p>
    </div>

    <div class="bot">
      <img class="images" src="\images\Merchant.jpg" alt="MC" />
      <h3>Merchant</h3>
      <p>
        Use your own Merchant to make payment<br />
        directly into your account.
      </p>
    </div>

    <div class="bot">
      <img class="images" src="\images\No Product Limits.jpg" alt="MC" />
      <h3>No Product Limits</h3>
      <p>
        Customers are able to purchase as many<br />
        products to the unified shopping cart as they<br />
        desire.
      </p>
    </div>
  </div>

  <div class="footer">
    <div class="footertop">
      <a href="/"
        ><img
          class="logo2"
          src="\images\go4logo.png"
          alt="logo"
          style="height:30px"
        /></a
      >

      <div class="footercol1">
        <h3>Explore</h3>
        <a href="/resellers">Our Resellers</a>
        <a href="/team">Our Team</a>
        <a href="/">Terms & Conditions</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Cookie Policy</a>
      </div>

      <div class="footercol2">
        <h3>Go4IT Network</h3>
        <a href="https://www.go4itafrica.com/">Go4IT Africa</a>
        <a href="https://www.go4itusa.com/">Go4IT USA</a>
        <a href="https://www.go4itunitedkingdom.com/">Go4IT UK</a>
      </div>

      <div class="footercol3">
        <h3>Support</h3>
        <a href="/contact">Contact Us</a>
      </div>
    </div>

    <div class="footerbottom">
      <p>2023 &#169; Go4Commerce I Powered by</p>
      <img src="\images\go4logo.png" alt="logo" height="20px" />
    </div>
  </div>
</body>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz@0,6..12;1,6..12&family=Questrial&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&family=Roboto&display=swap");

  p {
    padding-bottom: 10px;
  }
  h2 {
    padding-bottom: 20px;
  }
  .payment {
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
  }

  .paymentpara {
    padding-top: 80px;
  }

  .multiple {
    display: flex;
    justify-content: center;
    padding-top: 120px;
  }

  .multipleimage {
    padding-right: 30px;
  }
  .multiplepara {
    padding-top: 80px;
  }

  .check {
    display: flex;
    justify-content: space-evenly;
    padding-top: 100px;
  }

  .checkpara {
    padding-top: 60px;
    padding-left: 50px;
  }

  .checkpara li {
    list-style-image: url("/images/Check mark.jpg");
  }

  .checkimage {
    height: 550px;
  }

  .bottom {
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    justify-content: space-evenly;
  }

  .bot {
    text-align: center;
  }

  .images {
    height: 120px;
  }

  @media only screen and (max-width: 600px) {
    .multipleimage {
      transform: scale(0.9);
    }

    .checkimage {
      transform: scale(0.9);
    }
    .payment {
      flex-direction: column;
      padding-top: 0px;
      text-align: center;
    }

    .paymentpara {
      padding-top: 30px;
      padding-bottom: 40px;
      margin: 10px;
    }

    .multiple {
      flex-direction: column-reverse;
      padding-top: 0px;
    }

    .multiplepara {
      margin: 20px;
    }

    .check {
      flex-direction: column;
      padding: 0px;
    }

    .checkpara {
      margin: 10px;
    }

    .bot {
      padding: 20px;
    }
    .bottom {
      flex-direction: column;
      padding: 20px;
      padding-bottom: 50px;
    }
  }
</style>
