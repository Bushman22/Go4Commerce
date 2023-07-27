

<title>Teams</title>
<body>
    <link rel="stylesheet" type= "text/css" href="style.css">
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-BF47RSB0BT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BF47RSB0BT');
</script>
    <script src = "dropdown.js"></script>
    <header class="header">
        <nav class="navbar">
            <logo><a href = "/"><img class = "logo1" src="\images\go4logo.png" alt="logo" style=height:32px></a></logo>
            <ul class="nav-menu">
                <li class="nav-item"><a href="/features" class="nav-link">Features & Functionality</a></li>
                <div class="dropdown">
                    <li onclick="myFunction1()" class="dropbtn">Components <b>&#709;</b>
                        <i class="fa fa-caret-down"></i></li>
                   <div class="dropdown-content1" id = "myDropdown">
                      <a href="/admin">Admin Panel</a>
                      <a href="/templates">Template Design</a>
                      <a href="/integrations">Integrations</a>
                      <a href="/unified">Unified Shopping Cart</a>
                      <a href="/payment">Payment Gateway</a>
                    </div>
                </div>
                
                <div class="dropdown">
                    <li onclick="myFunction2()" class="dropbtn">About Us <b>&#709;</b>
                        <i class="fa fa-caret-down"></i>
                    </li>
                   <div class="dropdown-content2" id= "myDropdownbutton" >
                      <a href="/team">Meet the Team</a>
                      <a href="/resellers">Our Resellers</a>
                    </div>
                </div>
                <li class="nav-item"><a href="/contact" class="nav-link">Contact Us</a></li>
                <li class="nav-item1"><a href="/contact" class="nav-link1">Book a Meeting</a></li>
                <li class="nav-item2"><a href="https://main.go4trek.com/auth/login" class="nav-link1">Emmi Admin Portal</a></li>
            </ul>
            <div class="ham" onclick="toggleClass()">
                <h1>&#9776;</h1>
            </div>
        </nav>
    </header>

    <div class ="team">
        <div class ="teampara">
            <h1>MEET THE <br/>TEAM</h1>
        </div>
        <img class= "img1" src ="\images\Meet the team banner illustration.jpg" alt="banner" style = height:400px>
        </div>

    <div class= "build">
        <p>To build the extraordinary eCommerce platform, it takes an eclectic group of passionate experts. Get the know the<br/>
        people leading the way at Go4Commerce. </p>
    </div>

    <div class="experts">
        <h2>GO4COMMERCE EXPERTS</h2>
    </div>

        <div class = "center1">
            <div class="cent">
                <img class = "images" src = "\images\James Elstob.png" alt = "james elstob">
                <h3>JAMES ELSTOB</h3>
                <p>CEO</p>
            </div>
            <div class="cent">
                <img class = "images" src = "\images\Keagan Bush.png" alt = "Keagan Bush">
                <h3>KEAGAN BUSH</h3>
                <p>Software Developer</p>
            </div>
        </div>

        <div class = "center2">
            <div class="cent">
                <img class = "images" src = "\images\bevan versfeld.png" alt = "bevan versveld">
                <h3>BEVAN VERSFELD</h3>
                <p>Advisor</p>
            </div>
            <div class="cent">
                <img class = "images" src = "\images\BERRY VERSFELD.png" alt = "berry versfeld">
                <h3>BERRY VERSFELD</h3>
                <p>Advisor</p>
            </div>
        </div>

        <div class = "center3">
            <div class="cent">
                <img class = "images" src = "\images\pavel volynets.jpg" alt = "Pavel volynets">
                <h3>PAVEL VOLYNETS</h3>
                <p>Full stack Developer</p>
            </div>
            <div class="cent">
                <img class = "images" src = "\images\Jay Sloan.jpg" alt = "Jay Sloan">
                <h3>JAY SLOAN</h3>
                <p>Software Developer</p>
            </div>
        </div>

        <div class = "center4">
            <div class="cent">
                <img class = "images" src = "\images\jeanne-marie rossouw.png" alt = "JM">
                <h3>JEANNE-MARIE ROSSOUW</h3>
                <p>UX/UI Designer</p>
            </div>
            <div class="cent">
                <img class = "images" src = "\images\Thandiwe dube.jpg" alt = "Thandiwe">
                <h3>THANDIWE DUBE</h3>
                <p>Booking and Administration Consultant</p>
            </div>
        </div>

        <div class = "center5">
            <div class="cent">
                <img class = "images" src = "\images\Vincent Oosthuizen.jpg" alt = "Vincent">
                <h3>VINCENT OOSTHUIZEN</h3>
                <p>Architecture and integrations IT <br/>Manager</p>
            </div>
        </div>

        <div class = "footer">
            <a href = "/"><img class="logo2" src ="\images\go4logo.png" alt="logo" style=height:40px></a>
        
                        
                        
        </div>
</body>


<style>
.team{
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
}

.teampara{
    padding-top: 80px;
}

.build{
    text-align: center;
    padding-top: 100px;
}

.experts{
    text-align: center;
    padding-top: 50px;
}

.cent{
    text-align: center;
}
.center1{
    display: flex;
    justify-content: space-evenly;
    padding-top: 50px;
}

.center2{
    display: flex;
    justify-content: space-evenly;
    padding-top: 50px;
}

.center3{
    display: flex;
    justify-content: space-evenly;
    padding-top: 50px;
}

.center4{
    display: flex;
    justify-content: space-evenly;
    padding-top: 50px;
}

.center5{
    display: flex;
    justify-content: space-evenly;
    padding-top: 50px;
    padding-bottom: 100px;
}

@media only screen and (max-width:600px){
    .img1{
        transform: scale(0.9);
    }
    .team{
        flex-direction: column;
        text-align: center;
        padding:0px;
    }

    .build{
        margin:30px;
        padding:0px;
    }

    .teampara{
        padding:30px;
    }

    .cent{
    padding:20px;
    }
    .center1{
        flex-direction: column;
        padding:10px;
    }

    .center2{
        flex-direction: column;
        padding:10px;
    }

    .center3{
        flex-direction: column;
        padding:10px;
    }

    .center4{
        flex-direction: column;
        padding:10px;
    }
}

</style>