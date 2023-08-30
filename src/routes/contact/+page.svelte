<title>Contact Us</title>
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

  <div class="contact">
    <div class="contactpara">
      <h1>GET IN <br />TOUCH WITH <br />GO4COMMERCE</h1>
    </div>
    <img
      class="img4"
      src="\images\COntact us banner illustration.jpg"
      alt="contact"
    />
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

  .contact {
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
  }

  .contactpara {
    padding-top: 80px;
  }

  @media only screen and (max-width: 600px) {
    .img4 {
      transform: scale(0.9);
    }
    .contact {
      flex-direction: column;
      padding: 0px;
    }

    .contactpara {
      margin: 20px;
      padding: 0px;
    }
  }
</style>
