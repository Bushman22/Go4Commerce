
<script>

</script>
<title>Resellers</title>
<body>
    <link rel="stylesheet" type= "text/css" href="style.css">
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
    <div class ="resellers">
        <div class ="resellerspara">
            <h1>OUR <br/>RESELLERS</h1>
        </div>
        <img class= "resellersimg" src ="\images\Our reseller banner illustration-1.jpg" alt="banner" style = height:400px>
        </div>

        <div class = "build">
            <img class = "buildimage" src = "\images\They build your vision Image.jpg" alt="build">
                <div class ="buildpara">
                    <h2>THEY BUILD YOUR<br/>VISION</h2>
                    <p>Spread out across the world, our reseller will<br/>
                        handle every part of your online journey, including<br/>
                        content writing, web development, platform<br/>
                        design, hosting, and website maintenance. They<br/>
                        take care of all of these factors allowing you to<br/>
                        focus your time on what you do best: running your<br/>
                        business.</p>
                </div>
        </div>

        <div class="find">
            <h2>FIND OUR RESELLERS</h2>
        </div>

        <div class="map">
            <img class = "mapimage" src = "\images\map.png" alt="map">
        </div>

        <div class="go4it">
            <a href = "https://www.go4itafrica.com"><img class="GO4" src ="\images\Go4IT Africa Logo 1.png" alt="africa"></a>
            <a href = "https://www.go4itusa.com"><img class="GO4" src ="\images\go4it usa 1.png" alt="USA"></a>
            <a href = "https://www.go4itunitedkingdom.com"><img class="GO4" src ="\images\go4itunitedkingdom.png" alt="UK"></a>
            <a href = "https://www.crosshair.com"><img class="GO4" src ="\images\Crosshair tech logo bold 1.png" alt="crosshair"></a>
        </div>

        <div class = "footer">
            <a href = "/"><img class="logo2" src ="\images\go4logo.png" alt="logo" style=height:40px></a>
        
                        
                        
        </div>
</body>


<style>

.resellers{
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
}

.resellerspara{
    padding-top: 80px;
}

.build{
    padding-top:100px;
    display: flex;
    justify-content: center;
}

.buildpara{
    padding-top: 50px;
}

.buildimage{
    height:350px;
    padding-right:30px
}

.find{
    padding-top:100px;
    text-align: center;
}

.map{
    text-align: center;
}

.go4it{
    display: none;
    text-align: center;
    
}

.GO4{
    transform: scale(1.5);
    padding-top:50px;
    padding-bottom:50px;
}


@media only screen and (max-width:600px){


    .buildimage{
        transform: scale(0.9);
        padding: 0px;
    }

    .resellers{
        flex-direction: column;
        text-align: center;
        padding:0px;
    }

    .resellerspara{
        padding-top:30px;
        padding-bottom: 50px;
    }

    .build{
        flex-direction: column-reverse;
        padding-top: 30px;
    }
    .buildpara{
        margin:20px;
        padding-bottom:30px;
    }

    .map{
        display:none;
    }
    .go4it{
        display:flex;
        flex-direction: column;
    }

    
}

</style>