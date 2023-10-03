<title>Admin Panel</title>
<body>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <!-- Google tag (gtag.js) -->
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
  <div class="admin">
    <div class="adminpara">
      <h1>ADMIN PANEL</h1>
    </div>
    <img
      class="img1"
      src="\images\Admin Panel Banner illustration.png"
      alt="banner"
    />
  </div>

  <div class="control">
    <img
      class="img1"
      src="\images\Control it all from one panel image.jpg"
      alt="control"
    />
    <div class="controlpara">
      <h2>CONTROL IT ALL <br /> FROM ONE PANEL</h2>
      <p>
        A Carefully constructed eCommerce admin panel<br />
        that provides you with insights into your store,<br />
        allowing you to manage it all!
      </p>
    </div>
  </div>

  <div class="adminrole">
    <h2>ADMIN PANEL ROLES</h2>
  </div>

  <div class="platform">
    <div class="platformpara">
      <h2>PLATFORM <br />CONTENT ADMIN <br />ACCESS</h2>
      <ul>
        <h3><li>Full Control</li></h3>
        <p>
          Your business's own admin panel lets you edit<br />
          anything. From design and content to products<br />
          and invoicing - its all in your hands!
        </p>

        <h3><li>Custom Roles</li></h3>
        <p>
          Manage who in your team can edit your design,<br />
          content and products through the Go4Commerce<br />
          Panel. Share access to the necessary content only.
        </p>
      </ul>
    </div>
    <img
      class="img2"
      src="\images\Platform content admin access illustration.jpg"
      alt="platform"
    />
  </div>

  <div class="ecommerce">
    <img
      class="img3"
      src="\images\eCommerce customer login illustration.png"
      alt="ecommerce"
    />
    <div class="ecommercepara">
      <h2>ECOMMERCE <br />CUSTOMER LOGIN</h2>
      <p>
        Provide your customers with access to your<br />
        platform so they can view their details, order<br />
        history, invoices, and track their orders.
      </p>
    </div>
  </div>

  <div class="bottom1">
    <div class="bot">
      <img
        class="images"
        src="\images\Features and Functionality.jpg"
        alt="FF"
      />
      <h3>Features and Functionality</h3>
      <p>
        You control the photos, descriptions and<br />
        other content on product and category<br />
        pages to provide the most up-to-date and<br />
        relevant information to your customers.
      </p>
      <a href="/features"><h4>Read more &#x2192</h4></a>
    </div>
    <div class="bot">
      <img class="images" src="\images\Template and Design.jpg" alt="TD" />
      <h3>Template and Design</h3>
      <p>
        A beautiful, fully-branded online<br />
        app with a variety of responsive<br />
        templates, all of which can be<br />
        customized with HTML and CSS.
      </p>
      <a href="/templates"><h4>Read more &#x2192</h4></a>
    </div>

    <div class="bot">
      <img class="images" src="\images\Integrations.jpg" alt="I" />
      <h3>Integrations</h3>
      <p>
        Integrate with any integration<br />
        solution and pull together the best<br />
        applications from any industry for<br />
        any type of product.
      </p>
      <a href="/integrations"><h4>Read more &#x2192</h4></a>
    </div>
  </div>

  <div class="bottom2">
    <div class="bot">
      <img
        class="images"
        src="\images\Features and Functionality.jpg"
        alt="FF"
      />
      <h3>Unified Shopping Cart</h3>
      <p>
        Go4Commerces unified cart is<br />
        designed to be easy and convenient<br />
        for customers throughout their<br />
        whole shopping journey.
      </p>
      <a href="/unified"><h4>Read more &#x2192</h4></a>
    </div>
    <div class="bot">
      <img class="images" src="\images\Template and Design.jpg" alt="TD" />
      <h3>Payment Gateway</h3>
      <p>
        Use any payment gateway of your<br />
        choice for a convenient and flexible<br />
        payment process.
      </p>
      <a href="/payment"><h4>Read more &#x2192</h4></a>
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

  .admin {
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
  }

  .adminpara {
    padding-top: 80px;
  }

  h2 {
    margin-bottom: 25px;
  }

  .control {
    padding-top: 200px;
    display: flex;
    justify-content: center;
  }

  .controlpara {
    padding-left: 30px;
    padding-top: 85px;
  }

  .adminrole {
    text-align: center;
    padding-top: 100px;
  }

  .platform {
    padding-top: 50px;
    display: flex;
    justify-content: center;
  }

  .platformpara {
    padding-right: 150px;
  }
  .platformpara li {
    list-style-image: url("/images/Check mark.jpg");
  }

  .ecommerce {
    padding-top: 30px;
    display: flex;
    justify-content: space-evenly;
  }
  .ecommercepara {
    padding-top: 190px;
  }

  .bottom1 {
    padding-top: 50px;
    display: flex;
    justify-content: space-evenly;
  }

  .bottom2 {
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    justify-content: space-evenly;
  }

  .bot {
    text-align: center;
  }

  .images {
    height: 170px;
  }

  p {
    padding-bottom: 20px;
  }

  h3 {
    padding-top: 20px;
  }

  @media only screen and (max-width: 600px) {
    .admin h1 {
      font-size: 40px;
    }
    .img1 {
      transform: scale(0.9);
    }

    .img2 {
      transform: scale(0.7);
    }

    .img3 {
      transform: scale(0.9);
    }
    .admin {
      flex-direction: column;
      padding: 20px;
    }

    .adminpara {
      padding: 20px;
    }
    .control {
      flex-direction: column-reverse;
      padding: 20px;
    }

    .controlpara {
      padding: 20px;
    }

    .adminrole {
      padding-top: 0px;
      padding-left: 50px;
      text-align: left;
    }

    .adminrole h2 {
      font-size: 30px;
    }

    .platform {
      flex-direction: column;
      padding: 10px;
      text-align: left;
    }
    .platform h2 {
      font-size: 27px;
    }

    .platformpara {
      padding-right: 20px;
      padding-left: 40px;
    }

    .ecommerce {
      flex-direction: column;
      padding: 20px;
    }

    .ecommercepara {
      padding: 20px;
    }

    .bottom1 {
      flex-direction: column;
      padding: 20px;
    }
    .bottom2 {
      padding: 20px;
      flex-direction: column;
    }

    .bot {
      padding: 30px;
    }
  }
</style>
