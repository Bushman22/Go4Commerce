<title>Resellers</title>
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
  <div class="resellers">
    <div class="resellerspara">
      <h1>OUR <br />RESELLERS</h1>
    </div>
    <img
      class="resellersimg"
      src="\images\Our reseller banner illustration.jpg"
      alt="banner"
      style="height:400px"
    />
  </div>

  <div class="build">
    <img
      class="buildimage"
      src="\images\They build your vision Image.jpg"
      alt="build"
    />
    <div class="buildpara">
      <h2>THEY BUILD YOUR<br />VISION</h2>
      <p>
        Spread out across the world, our reseller will<br />
        handle every part of your online journey, including<br />
        content writing, web development, platform<br />
        design, hosting, and website maintenance. They<br />
        take care of all of these factors allowing you to<br />
        focus your time on what you do best: running your<br />
        business.
      </p>
    </div>
  </div>

  <div class="find">
    <h2>FIND OUR RESELLERS</h2>
  </div>

  <div class="map">
    <img class="mapimage" src="\images\map.png" alt="map" />
  </div>

  <img class="ellipse1" src="\images\Ellipse.png" alt="ellipse1" />
  <img class="ellipse2" src="\images\Ellipse.png" alt="ellipse2" />
  <img class="ellipse3" src="\images\Ellipse.png" alt="ellipse3" />
  <img class="ellipse4" src="\images\Ellipse.png" alt="ellipse4" />

  <div class="go4it">
    <a href="https://www.go4itafrica.com"
      ><img class="GO4" src="\images\Go4IT Africa Logo 1.png" alt="africa" /></a
    >
    <a href="https://www.go4itusa.com"
      ><img class="GO4" src="\images\go4it usa 1.png" alt="USA" /></a
    >
    <a href="https://www.go4itunitedkingdom.com"
      ><img class="GO4" src="\images\go4itunitedkingdom.png" alt="UK" /></a
    >
    <a href="https://www.crosshair.com"
      ><img
        class="GO4"
        src="\images\Crosshair tech logo bold 1.png"
        alt="crosshair"
      /></a
    >
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

  .resellers {
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
  }

  .resellerspara {
    padding-top: 80px;
  }

  .build {
    padding-top: 100px;
    display: flex;
    justify-content: center;
  }

  .buildpara {
    padding-top: 50px;
  }

  .buildimage {
    height: 350px;
    padding-right: 30px;
  }

  .find {
    padding-top: 100px;
    text-align: center;
  }

  .map {
    text-align: center;
  }

  .go4it {
    display: none;
    text-align: center;
  }

  .GO4 {
    transform: scale(1.5);
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .ellipse1 {
    position: absolute;
    top: 1695px;
    left: 275px;
  }

  .ellipse2 {
    position: absolute;
    top: 1625px;
    left: 537px;
  }

  .ellipse3 {
    position: fixed;
    top: 1190px;
    left: 50px;
  }

  @media only screen and (max-width: 600px) {
    .buildimage {
      transform: scale(0.9);
      padding: 0px;
    }

    .resellers {
      flex-direction: column;
      text-align: center;
      padding: 0px;
    }

    .resellerspara {
      padding-top: 30px;
      padding-bottom: 50px;
    }

    .build {
      flex-direction: column-reverse;
      padding-top: 30px;
    }
    .buildpara {
      margin: 20px;
      padding-bottom: 30px;
    }

    .map {
      display: none;
    }
    .go4it {
      display: flex;
      flex-direction: column;
    }
  }
</style>
