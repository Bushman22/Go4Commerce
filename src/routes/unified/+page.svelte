<title>Unified</title>
<body>
  <link rel="stylesheet" type="text/css" href="style.css" />
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
          <a href="https://meetings.hubspot.com/james-elstob" target = "_blank"  class="nav-link1">Book a Meeting</a>
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

  <div class="unified">
    <div class="unifiedpara">
      <h1>UNIFIED <br />SHOPPING<br />CART</h1>
    </div>
    <img
      class="img1"
      src="\images\Unified Shopping cart banner illustration.png"
      alt="banner"
    />
  </div>

  <div class="exp">
    <img
      class="expimage"
      src="\images\Unified Shopping Cart Image.jpg"
      alt="experience"
    />
    <div class="exppara">
      <h2>UNIFIED <br />SHOPPING<br />EXPERIENCE</h2>
      <p>
        Unified cart lets your users easily buy anything —<br />
        from booking lodging or experiences to buying<br />
        from your store — from one cart! This way, you<br />
        can set up multiple integrations, with consistent<br />
        cart and order behaviour across the board.
      </p>
    </div>
  </div>

  <div class="how">
    <div class="howpara">
      <h2>HOW IT WORKS</h2>
      <ul>
        <li><p>The user adds products to the cart.</p></li>
        <li>
          <p>All products will be placed in one<br />consolidated cart</p>
        </li>
        <li><p>The user completes the checkout process</p></li>
        <li>
          <p>
            You and the user will each recieve a single<br />
            order confirmation. All integrated systems<br />
            will be updated simultaneously.
          </p>
        </li>
      </ul>
    </div>
    <img
      class="howpic"
      src="\images\How it works illustration.png"
      alt="howitworks"
    />
  </div>

  <div class="features">
    <h2>FEATURES</h2>
  </div>

  <div class="bottom1">
    <div class="bot">
      <img class="images" src="\images\No Transaction Fees.jpg" alt="NTF" />
      <h3>No Transaction Fees</h3>
      <p>
        Where other carts skim off the top of your<br />
        profits by charging a percentage fee for<br />
        every transaction, our platform does not<br />
        leverage fees on top of those normally<br />
        charged by your payment processor.
      </p>
    </div>
    <div class="bot">
      <img class="images" src="\images\No Product Limits.jpg" alt="NPL" />
      <h3>No Product Limits</h3>
      <p>
        Customers are able to purchase as many<br />
        products to the unified shopping cart as they<br />
        desire.
      </p>
    </div>
  </div>

  <div class="bottom2">
    <div class="bot">
      <img
        class="images"
        src="\images\Present Customers With a Seamless, Bug-free Cart.jpg"
        alt="bugfree"
      />
      <h3>Present Customers With <br />Seamless, Bug-free Cart</h3>
      <p>
        With Go4Commerce, you get the best<br />
        shopping cart features in the industry to<br />
        ensure your customers have the smoothest<br />
        experience possible - and it's completely<br />
        bug-free, as well as designed to make<br />
        shopping easy for them along the way.
      </p>
    </div>
    <div class="bot">
      <img class="images" src="\images\Unified Invoicing.jpg" alt="NPL" />
      <h3>No Product Limits</h3>
      <p>
        All orders made will appear on one single<br />
        unified invoice, making it easier for you and<br />
        your customer to manage orders.
      </p>
    </div>
  </div>

  <div class="bottom3">
    <div class="bot">
      <img class="images" src="\images\Unified Payment.jpg" alt="UP" />
      <h3>Unified Payment</h3>
      <p>
        With the Unified Shopping Cart, customers<br />
        can purchase products using one payment<br />
        gateway and one payment process.
      </p>
    </div>
    <div class="bot">
      <img class="images" src="\images\Customizable Invoice.jpg" alt="CI" />
      <h3>Customizable Invoice</h3>
      <p>
        Have the freedrom to customize your own<br />
        invoice, giving your customers a<br />
        omnichannel experience.
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
    padding-bottom: 20px;
  }
  h2 {
    padding-bottom: 20px;
  }
  .unified {
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
  }

  .unifiedpara {
    padding-top: 80px;
  }

  .exp {
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }

  .expimage {
    padding-right: 30px;
  }
  .exppara {
    padding-top: 50px;
  }

  .how {
    display: flex;
    justify-content: space-evenly;
    padding-top: 100px;
  }

  .howpara {
    padding-top: 80px;
    padding-left: 50px;
  }

  .howpara li {
    list-style-image: url("/images/Check mark.jpg");
  }

  .features {
    text-align: center;
    padding-top: 100px;
  }

  .bot {
    text-align: center;
  }
  .bottom1 {
    display: flex;
    justify-content: space-evenly;
    padding-top: 50px;
  }

  .bottom2 {
    display: flex;
    justify-content: space-evenly;
    padding-top: 50px;
  }

  .bottom3 {
    display: flex;
    justify-content: space-evenly;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media only screen and (max-width: 768px) {
    .expimage {
      transform: scale(0.9);
    }

    .howpic {
      transform: scale(0.9);
    }

    .unified {
      flex-direction: column;
      text-align: center;
      padding: 0px;
    }
    .unifiedpara {
      padding-top: 20px;
      padding-bottom: 40px;
    }

    .exp {
      flex-direction: column-reverse;
      padding-top: 0px;
    }

    .exppara {
      padding-top: 40px;
      margin: 20px;
    }

    .how {
      flex-direction: column;
      padding-top: 0px;
    }

    .howpara {
      margin: 10px;
    }

    .bot {
      padding: 20px;
    }

    .bottom1 {
      flex-direction: column;
      padding: 10px;
      padding-bottom: 10px;
    }

    .bottom2 {
      flex-direction: column;
      padding: 10px;
      padding-bottom: 10px;
    }

    .bottom3 {
      flex-direction: column;
      padding: 10px;
      padding-bottom: 50px;
    }
  }
</style>
