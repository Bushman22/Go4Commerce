
<script>

</script>
<title>Resellers</title>
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
    <div class ="resellers">
        <div class ="resellerspara">
            <h1>OUR<br/>RESELLERS</h1>
        </div>
        <img class= "img1" src ="\images\Our reseller banner illustration-1.jpg" alt="banner" style = height:400px>
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


</style>