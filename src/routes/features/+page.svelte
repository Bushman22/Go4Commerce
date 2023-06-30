
<script>

</script>
<title>Features</title>
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
                <li class="nav-item1"><a href="/" class="nav-link1">Book a Meeting</a></li>
                <li class="nav-item2"><a href="/admin" class="nav-link1">Admin Login</a></li>
            </ul>
            <div class="ham" onclick="toggleClass()">
                <h1>&#9776;</h1>
            </div>
        </nav>
    </header>
    <div class ="features">
        <div class ="featurespara">
            <h2>FEATURES AND<br/> FUNCTIONALILTY</h2>
        </div>
        <img class= "img1" src ="\images\F&F banner illustration.png" alt="banner">
        </div>

        <div class = "amaze">
            <h2>AMAZING FEATURES</h2> 
        </div>

        <div class = "center1">
            <div class = "con">
                <img class= "images" src ="\images\Headless Commerce.jpg" alt="HC">
                <h3>Headless Commerce</h3>
                <p>By leveraging our front-end technology, our<br/>
                     developers can offer high-quality content <br/>
                     experiences, and our back-end ecommerce<br/>
                      solution will handle all eCommerce<br/>
                     functions.</p>
            </div>
            <div class = "con">
                <img class= "images" src ="\images\Omnichannel Presence.jpg" alt="OP">
                <h3>Omnichannel Presence</h3>
                <p>You can take your omnichannel strategy to<br/>
                    the next level with solid content<br/>
                     infrastructure. No matter what new devices<br/>
                     hit the market, deliver content to any<br/>
                      channel. </p>
            </div>
        </div>

        <div class = "center2">
            <div class = "con">
                <img class= "images" src ="\images\Intuitive Dashboard.jpg" alt="ID">
                <h3>Intuitive Dashboard</h3>
                <p>A well-designed eCommerce dashboard<br/>
                    that provides real-time insights into your<br/>
                    store's performance and provides access to<br/>
                     all the features in your web app. </p>
            </div>
            <div class = "con">
                <img class= "images" src ="\images\Fully Customizable.jpg" alt="FC">
                <h3>Fully Customizable</h3>
                <p>The Go4Commerce panel that gives you the<br/>
                     flexibility to edit, design, and manage<br/>
                      content layout on all web pages.</p>
            </div>
        </div>

        <div class = "center3">
            <div class = "con">
                <img class= "images" src ="\images\Detailed Analytics.jpg" alt="DA">
                <h3>Detailed Analytics</h3>
                <p>Using Google Analytics, you can keep track<br/>
                     of your products and how customers engage<br/>
                     with your web app.</p>
            </div>
            <div class = "con">
                <img class= "images" src ="\images\Super Fast.jpg" alt="SF">
                <h3>Super Fast</h3>
                <p>eCommerce relies heavily on creativity and<br/>
                    speed. The Go4Commerce panel is a <br/>
                     modern, super-fast platform that delivers<br/>
                      great experiences and is extremely easy to<br/>
                       manage and update.</p>
            </div>
        </div>

        <div class = "center4">
            <div class = "con">
                <img class= "images" src ="\images\Effective Inventory Management.jpg" alt="EIM">
                <h3>Effective inventory Management</h3>
                <p>A superior panel with efficient inventory<br/>
                     management features, such as managing<br/>
                     variants, sale prices, coupons, promotions<br/>
                      and reviews.</p>
            </div>
            <div class = "con">
                <img class= "images" src ="\images\Single Codebase.jpg" alt="SC">
                <h3>Single Codebase</h3>
                <p>A single codebase allows all the features of<br/>
                     an application to be accessed without<br/>
                     hindrance. Single codebase applications<br/>
                     give a uniform feel across all the devices<br/>
                    and browsers.</p>
            </div>
        </div>

        <div class = "center5">
            <div class = "con">
                <img class= "images" src ="\images\Product and Category Control.jpg" alt="PCC">
                <h3>Products and Category Control</h3>
                <p>You control the photos, descriptions and<br/>
                    other content on product and category<br/>
                    pages to provide the most up-to-date and<br/>
                    relevant information to your customers.</p>
            </div>
            <div class = "con">
                <img class= "images" src ="\images\Security for Customers.jpg" alt="SC">
                <h3>Security for Customers</h3>
                <p>Customers can easily and safely enter their<br/>
                    private information on our platform in an<br/>
                     intuitive and secure environment.</p>
            </div>
        </div>

        <div class = "center6">
            <div class = "con">
                <img class= "images" src ="\images\Full Control.jpg" alt="FC">
                <h3>Full Control</h3>
                <p>Setting group permissions, creating custom1<br/>
                     forms, and directly editing code without<br/>
                     negatively affecting the system</p>
            </div>

       </div>


        <div class = "footer">
            <logo2><a href = "/"><img src="\images\go4logo.png" alt="logo" style=height:40px></a></logo2>
        
                        
                        
        </div>
</body>


<style>

.features{
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
}

.featurespara{
    padding-top: 80px;
}


.amaze{
    text-align:center;
    padding-top: 100px;
}

.con{
    text-align: center;
}

.images{
    height:120px;
}
.center1{
    padding-top: 80px;
    display: flex;
    justify-content: space-evenly;
}
.center2{
    padding-top: 150px;
    display: flex;
    justify-content: space-evenly;
}

.center3{
    padding-top: 150px;
    display: flex;
    justify-content: space-evenly;
}

.center4{
    padding-top: 150px;
    display: flex;
    justify-content: space-evenly;
}

.center5{
    padding-top: 150px;
    display: flex;
    justify-content: space-evenly;
}

.center6{
    padding-top: 150px;
    padding-bottom: 150px;
    display: flex;
    justify-content: space-evenly;
}

@media only screen and (max-width:768px){
    .img1{
       transform:scale(90%);
        
    }

    .images{
        height:90px;
    }
    .features{
        
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .featurespara{
        padding-top: 00px;
    }
    .amaze{
        padding-top: 30px;
    }

    .center1{
        padding:10px;
        flex-direction: column;
    }

    .center2{
        padding:10px;
        flex-direction: column;
    }

    .center3{
        padding:10px;
        flex-direction: column;
    }

    .center4{
        padding:10px;
        flex-direction: column;
    }

    .center5{
        padding:10px;
        flex-direction: column;
    }

    .center6{
        padding:10px;
        flex-direction: column;
    }
    .con{
        padding:30px;
    }
}
</style>