
<script>

</script>
<title>Teams</title>
<body>
    <link rel="stylesheet" type= "text/css" href="style.css">
    <script src = "dropdown.js"></script>
    <header class="header">
        <nav class="navbar">
            <logo><a href = "/"><img src="\images\go4logo.png" alt="logo" style=height:32px></a></logo>
            <ul class="nav-menu">
                <li class="nav-item"><a href="/features" class="nav-link">Features & Functionality</a></li>
                <div class="dropdown">
                    <button onclick="myFunction1()" class="dropbtn">Components &#11167
                        <i class="fa fa-caret-down"></i></button>
                   <div class="dropdown-content" id = "myDropdown">
                      <a href="/admin">Admin Panel</a>
                      <a href="/templates">Template Design</a>
                      <a href="/integrations">Integrations</a>
                      <a href="/unified">Unified Shopping Cart</a>
                      <a href="/payment">Payment Gateway</a>
                    </div>
                </div>
                
                <div class="dropdown">
                    <button onclick="myFunction2()" class="dropbtn">About Us &#11167
                        <i class="fa fa-caret-down"></i>
                    </button>
                   <div class="dropdown-content" id= "myDropdownbutton" >
                      <a href="/team">Meet the Team</a>
                      <a href="/resellers">Our Resellers</a>
                    </div>
                </div>
                <li class="nav-item"><a href="/contact" class="nav-link">Contact Us</a></li>
                <li class="nav-item1"><a href="/" class="nav-link1">Book a Meeting</a></li>
                <li class="nav-item2"><a href="/admin" class="nav-link1">Admin Login</a></li>
            </ul>
        </nav>
    </header>

    <div class ="team">
        <div class ="teampara">
            <h1>MEET THE<br/>TEAM</h1>
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
                <img class = "images" src = "\images\Barry Saxton.jpg" alt = "barry saxton">
                <h3>BARRY SAXTON</h3>
                <p>Strategy and Business Development<br/>Advisor</p>
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
                <img class = "images" src = "\images\mischka kruger.jpg" alt = "mischka kruger">
                <h3>MISCHKA KRUGER</h3>
                <p>UX/UI Designer</p>
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
                <p>Architecture and integrations IT<br/>Manager</p>
            </div>
        </div>

        <div class = "footer">
            <logo2><a href = "/"><img src="\images\go4logo.png" alt="logo" style=height:40px></a></logo2>
        
                        
                        
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


</style>