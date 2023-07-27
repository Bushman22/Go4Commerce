

<title>Integrations</title>
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

    <div class ="integration">
        <div class ="integrationpara">
            <h1>INTEGRATION</h1>
        </div>
        <img class= "img1" src ="\images\Integration banner illustration.png" alt="banner">
        </div>

        <div class= "API">
            <img class= "apiimage" src ="\images\API integrationsImage.jpg" alt="api">
            <div class = "APIpara">
                <h2>API <br/>INTEGRATIONS</h2>
                <p>As a managed API platform, we integrate with any<br/>
                    integration solution, allowing us to pull together the best<br/>
                    applications from each industry for each type of product, so<br/>
                    you have the best of the best for everything you need to sell.</p>
            </div>
        </div>

        <div class = "how">
            <div class = "howpara">
                <h2>HOW IT WORKS</h2>
                <ul>
                    <li><p>Our developers will integrate your product<br/>
                        inventory or booking API using your<br/>
                        specifications in order to create a <b>custom<br/>
                        integration.</b>We will then configure your<br/>
                        platform to use the integration.</p></li>

                        <li><p>Once the integration is set up, the <b>products</b><br/>
                            can be pulled or built on your platform,<br/>
                            allowing your customers to view every<br/>
                            'detail about your product.</p></li>

                        <li><p>Once an order has been placed, all<br/>
                            integration systems will <b>update instantly</b>,<br/>
                            sending a single invoice to the user and you<br/>
                            can track the order or booking from your<br/>
                            Admin Panel. </p></li>

                </ul>
            </div>
            <img class= "howimage" src ="\images\How it works illustration.jpg" alt="how">
        </div>
<div class = "box">
        <div class ="col-left">
            <div class ="col-top" >
                <img class= "ff" src ="\images\Integration image 1.jpg" alt="one">
                <img class= "ff4" src ="\images\Integration image 2.jpg" alt="two">
            </div>
            <div class ="col-bottom">
                <img class= "ff1" src ="\images\Integration image 3.jpg" alt="three">
                <img class= "ff3" src ="\images\Integration image 4.jpg" alt="four">
                <img class= "ff2" src ="\images\Integration image 5.jpg" alt="five">
            </div>
        </div>
       
    
        <div class = "col-right">
            <h2>LOOKING FOR AN <br/>INVENTORY <br/>MANAGEMENT <br/>SYSTEM?</h2>
            <p>We've got you covered! Go4Commerce<br/>
                Platform comes with the option to integrate<br/>
                external APIs, in addition to our own<br/>
                inventory management system, which<br/>
                provides you with the ability to manage all<br/>
                orders internally and externally.
            </p>
        </div>
</div>
        <div class = "bottom">
            <div class = "bot">
                <img class = "images" src = "\images\Unified Shopping Cart.jpg" alt = "USC">
                <h3>Unified Shopping Cart</h3>
                <p>Go4Commerce's unified cart is<br/>
                designed to be easy and convenient<br/>
                for customers throughout their<br/>
                whole shopping journey.</p>
                <a href = "/unified"><h4>Read more &#x2192</h4></a>
            </div>

            <div class = "bot">
                <img class = "images" src = "\images\Unified Shopping Cart.jpg" alt = "USC">
                <h3>Payment Gateway</h3>
                <p>Use any payment gateway of your<br/>
                    choice for a convenient and flexible<br/>
                    payment process. </p>
                <a href = "/payment"><h4>Read more &#x2192</h4></a>
            </div>
        </div>

        <div class = "footer">
            <a href = "/"><img class="logo2" src ="\images\go4logo.png" alt="logo" style=height:40px></a>
        
                        
                        
        </div>
</body>


<style>

    p{
        padding-bottom: 20px;
    }
h2{
    padding-bottom: 20px;
}

h3{
    padding-bottom: 15px;
}
.integration{
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
}

.integrationpara{
    padding-top: 80px;
}
.API{
    display: flex;
    justify-content: center;
    padding-top: 100px;
}
.APIpara{
    padding-top: 90px;
    padding-left: 20px;
}

.howpara li{
    list-style-image: url('/images/Check mark.jpg');
}

.how{
    padding-top: 100px;
    display: flex;
    justify-content:center;
}

.howpara{
    padding-right: 50px;
    padding-top: 50px;
}
.col-left{
  float:left;
  text-align: right;
  padding-left: 100px;
  padding-right: 20px;

}

.col-top{
    padding-top:100px;
}

.col-right{
padding-top:190px;
padding-bottom: 200px;

}
.ff{
padding:10px;

}
.ff1{
padding:10px;
padding-bottom: 75px;

}
.ff2{
padding:10px;
padding-bottom: 30px;
}

.ff3{
padding:10px;

}

.ff4{
padding:10px;

}

.bottom{
    display: flex;
    justify-content: space-evenly;
    
    padding-bottom: 50px;
}

.bot{
    text-align: center;
}

@media only screen and (max-width:768px){

    .img1{
        transform: scale(0.9);
    }

    .apiimage{
        transform: scale(0.9);
    }

    .howimage{
        transform: scale(0.9);
    }

    .integration{
        flex-direction: column;
        text-align: center;
        padding-top:0px;
    }

    .integrationpara{
        padding-top: 30px;
        padding-bottom: 30px;
    }


    .API{
        flex-direction:column-reverse;
        padding:0px;
    }

    .APIpara{
        padding-top: 50px;
        margin:20px;
    }

    .how{
        flex-direction: column;
        padding:0px;
    }

    .howpara{
        padding-top:50px;
        margin-left:50px;
    }

    
.col-left{
    text-align: center;
  text-align: right;
  padding-left: 0px;
    padding: 20px;
}

.col-top{
    display: flex;
    justify-content: center;
  padding: 0px;
}

.col-bottom{
    display: flex;
    justify-content: left;
    padding: 0px;
}
.box{
    display: flex;
    flex-direction: column;
    padding-top: 50px;
}

.ff{
padding:5px;
height:120px;

}
.ff1{
padding:5px;
padding-bottom: 75px;
height:60px;

}
.ff2{
padding:5px;
padding-bottom: 30px;
height:60px;
}

.ff3{
padding:5px;
height:90px;
}

.ff4{
margin-top: 17px;
padding:5px;
height: 100px;

}

.col-right{
padding-top:0px;
padding-bottom: 0px;
margin:30px;
}

.bot{
    padding:20px;
    }
    .bottom{
        flex-direction: column;
        padding:10px;
        padding-bottom: 50px;
    }

}
</style>