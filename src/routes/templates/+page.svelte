<title>Templates</title>
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

  <div class="template">
    <div class="templatepara">
      <h1>TEMPLATE DESIGN</h1>
    </div>
    <img
      class="img1"
      src="\images\Template design banner illustration.png"
      alt="banner"
    />
  </div>

  <div class="design">
    <img
      class="imgi"
      src="\images\template and design image.jpg"
      alt="design"
      style="height:350px"
    />
    <div class="designpara">
      <h2>TEMPLATE AND <br />DESIGN</h2>
      <ul>
        <li>
          <p>
            We offer a variety of eCommerce templates, all of<br />
            which are mobile-friendly, SEO-optimized, and <br />
            highly customizable.
          </p>
        </li>
        <li>
          <p>
            Our Go4Commerce resellers expertly customize<br />
            the chosen template using HTML and CSS,<br />
            making it perfectly suited for your brand identity<br />
            and style.
          </p>
        </li>
      </ul>
    </div>
  </div>

  <div class="features">
    <h2>FEATURES</h2>
  </div>

  <div class="middle1">
    <div class="mid">
      <img class="images" src="\images\template.png" alt="Temp" />
      <h3>Templates</h3>
      <p>
        Choose from one of our ready-made<br />
        templates that already have code base and<br />
        design based on the product you wish to<br />
        sell.
      </p>
    </div>

    <div class="mid">
      <img class="images" src="\images\Fully Customizable.jpg" alt="Temp" />
      <h3>Fully Customizable</h3>
      <p>
        Your template will be fully customized to fit<br />
        your brand. Adding your logo, fonts, colors,<br />
        page layouts, banners, and more will make<br />
        your website look exactly like you want.
      </p>
    </div>
  </div>

  <div class="middle2">
    <div class="mid">
      <img class="images" src="\images\Web-based Builder.jpg" alt="WbB" />
      <h3>Web-based Builder</h3>
      <p>
        We host your entire website. Access<br />
        everything from the browser, no matter<br />
        the device
      </p>
    </div>
    <div class="mid">
      <img class="images" src="\images\Edit HTML and CSS.jpg" alt="EHC" />
      <h3>Edit HTML and CSS</h3>
      <p>
        Each aspect of your site can be easily<br />
        customized with our HTML and CSS<br />
        codebase.
      </p>
    </div>
  </div>

  <div class="middle3">
    <div class="mid">
      <img class="images" src="\images\Content Management.jpg" alt="CM" />
      <h3>Content Management</h3>
      <p>
        Use the built-in file manager to upload and<br />
        store images and content. The content<br />
        manager acts as a central repository for all<br />
        content uploaded to your platform.
      </p>
    </div>
    <div class="mid">
      <img class="images" src="\images\Fully Responsive.jpg" alt="FR" />
      <h3>Fully Responsive</h3>
      <p>
        Your customers get a consistent experience<br />
        no matter how they access your web app<br />
        thanks to all of the templates being fully<br />
        responsive.
      </p>
    </div>
  </div>

  <div class="api">
    <div class="apipara">
      <h2>OUR API <br />INTEGRATIONS</h2>
      <p>
        Your choice of front-end experience (whether a<br />
        web app, a PWA, or any application) is a key<br />
        consideration in your business strategy. At the end<br />
        of the day, the eCommerce technology you plug in<br />
        needs to do one thing: sell your products. Thats<br />
        why we build you integrations and APIs for without<br />
        compromise.
      </p>
      <a href="/integrations"><h4>Integrations &#x2192</h4></a>
    </div>
    <img
      class="imgapi"
      src="\images\Our API integrations illustration.png"
      alt="API"
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

  h2 {
    padding-bottom: 20px;
  }
  h3 {
    padding-bottom: 20px;
  }

  h4 {
    padding-top: 15px;
  }
  .template {
    display: flex;
    justify-content: center;
    padding-top: 50px;
  }

  .templatepara {
    padding-top: 80px;
  }

  .design {
    padding-top: 100px;
    display: flex;
    justify-content: center;
  }

  .designpara {
    padding-top: 50px;
  }

  .designpara li {
    list-style-image: url("/images/Check mark.jpg");
  }

  .img1 {
    padding-right: 100px;
  }

  .imgi {
    padding-right: 100px;
  }

  .features {
    text-align: center;
    padding-top: 100px;
  }

  .mid {
    text-align: center;
  }
  .middle1 {
    display: flex;
    justify-content: space-evenly;
    padding-top: 80px;
  }

  .middle2 {
    display: flex;
    justify-content: space-evenly;
    padding-top: 80px;
  }

  .middle3 {
    display: flex;
    justify-content: space-evenly;
    padding-top: 80px;
  }

  .api {
    display: flex;
    justify-content: space-evenly;
    padding-top: 100px;
    padding-bottom: 70px;
  }

  .apipara {
    padding-top: 100px;
  }

  @media only screen and (max-width: 768px) {
    .img1 {
      transform: scale(0.9);
      padding: 0px;
    }

    .imgi {
      display: none;
    }

    .imgapi {
      transform: scale(0.9);
    }
    .template {
      flex-direction: column;
    }

    .templatepara {
      padding: 20px;
      text-align: center;
    }

    .design {
      flex-direction: column-reverse;
      padding: 20px;
    }

    .designpara {
      padding-top: 10px;
      padding-left: 40px;
    }

    .mid {
      padding: 20px;
    }
    .middle1 {
      flex-direction: column;
      padding: 10px;
    }

    .middle2 {
      flex-direction: column;
      padding: 10px;
    }
    .middle3 {
      flex-direction: column;
      padding: 10px;
    }

    .api {
      flex-direction: column;
      padding: 20px;
    }
  }
</style>
