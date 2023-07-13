
<script>

</script>
<title>Contact Us</title>
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

    <div class ="contact">
        <div class ="contactpara">
            <h1>GET IN <br/>TOUCH WITH <br/>GO4COMMERCE</h1>
        </div>
        <img class= "img4" src ="\images\COntact us banner illustration.jpg" alt="contact">
        </div>

</body>


<style>
.contact{
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
}

.contactpara{
    padding-top: 80px;
}


@media only screen and (max-width:600px){

.img4{
    transform: scale(0.9);
}
    .contact{
        flex-direction: column;
        padding:0px;
    }

    .contactpara{
        margin: 20px;
        padding:0px;
    }
}






</style>