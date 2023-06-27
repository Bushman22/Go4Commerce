
<script>

</script>
<title>Templates</title>
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

    <div class ="template">
        <div class ="templatepara">
            <h1>TEMPLATE DESIGN</h1>
        </div>
        <img class= "img1" src ="\images\Template design banner illustration.png" alt="banner">
        </div>

        <div class ="design">
            <img class= "img1" src ="\images\template and design image.jpg" alt="design" style= height:350px>
            <div class ="designpara">
                <h2>TEMPLATE AND <br/>DESIGN</h2>
                <ul>
                    <li><p>We offer a variety of eCommerce templates, all of<br/>
                        which are mobile-friendly, SEO-optimized, and <br/>
                        highly customizable. </p></li>
                    <li><p>Our Go4Commerce resellers expertly customize<br/>
                        the chosen template using HTML and CSS,<br/>
                        making it perfectly suited for your brand identity<br/>
                        and style. </p></li>
                </ul>
                </div>
         </div>

         <div class = "features">
            <h2>FEATURES</h2>
         </div>

         <div class = "middle1">
            <div class = "mid">
                <img class= "images" src ="\images\template.jpg" alt="Temp">
                <h3>Templates</h3>
                <p>Choose from one of our ready-made<br/>
                    templates that already have code base and<br/>
                    design based on the product you wish to<br/>
                    sell.</p>
                </div>
            

            <div class = "mid">
                <img class= "images" src ="\images\Fully Customizable.jpg" alt="Temp">
                <h3>Fully Customizable</h3>
                <p>Your template will be fully customized to fit<br/>
                    your brand. Adding your logo, fonts, colors,<br/>
                    page layouts, banners, and more will make<br/>
                    your website look exactly like you want.</p>
            </div>
         </div>

         <div class = "middle2">
            <div class = "mid">
                <img class= "images" src ="\images\Web-based Builder.jpg" alt="WbB">
                    <h3>Web-based Builder</h3>
                    <p>We host your entire website. Access<br/>
                    everything from the browser, no matter<br/>
                     the device</p>
            </div>
            <div class = "mid">
                <img class= "images" src ="\images\Edit HTML and CSS.jpg" alt="EHC">
                <h3>Edit HTML and CSS</h3>
                <p>Each aspect of your site can be easily<br/>
                    customized with our HTML and CSS<br/>
                    codebase.</p>
                
            </div>
         </div>

         <div class = "middle3">
            <div class = "mid">
                <img class= "images" src ="\images\Content Management.jpg" alt="CM">
                <h3>Content Management</h3>
                <p>Use the built-in file manager to upload and<br/>
                    store images and content. The content<br/>
                    manager acts as a central repository for all<br/>
                    content uploaded to your platform.</p>

            </div>
            <div class = "mid">
                <img class= "images" src ="\images\Fully Responsive.jpg" alt="FR">
                <h3>Fully Responsive</h3>
                <p>Your customers get a consistent experience<br/>
                    no matter how they access your web app<br/>
                    thanks to all of the templates being fully<br/>
                    responsive.</p>
                
            </div>
         </div>

         <div class ="api">
            <div class ="apipara">
                <h2>OUR API <br/>INTEGRATIONS</h2>
                <p>Your choice of front-end experience (whether a<br/>
                    web app, a PWA, or any application) is a key<br/>
                    consideration in your business strategy. At the end<br/>
                    of the day, the eCommerce technology you plug in<br/>
                    needs to do one thing: sell your products. Thats<br/>
                    why we build you integrations and APIs for without<br/>
                    compromise.</p>
                <a href = "/integrations"><h4>Integrations &#x2192</h4></a>
               
            </div>
            <img class= "imgapi" src ="\images\Our API integrations illustration.png" alt="API">
            </div>

            <div class = "footer">
                <logo2><a href = "/"><img src="\images\go4logo.png" alt="logo" style=height:40px></a></logo2>
            
                            
                            
            </div>
</body>


<style>

h2{
    padding-bottom: 20px;
}
h3{
    padding-bottom: 20px;
}

h4{
    padding-top: 15px;
}
.template{
    display: flex;
    justify-content: center;
    padding-top: 50px;
}

.templatepara{
    padding-top: 80px;
}

.design{
    
    padding-top: 100px;
    display:flex;
    justify-content: center;
}

.designpara{
    padding-top: 50px;
    
}

.designpara li{
    list-style-image: url('/images/Check mark.jpg');
}

.img1{
    padding-right: 100px;
}

.features{
    text-align: center;
    padding-top: 100px;
}

.mid{
    text-align: center;
}
.middle1{
    display: flex;
justify-content:space-evenly;
padding-top: 80px;
}

.middle2{
    display: flex;
justify-content:space-evenly;
padding-top: 80px;
}

.middle3{
    display: flex;
justify-content:space-evenly;
padding-top: 80px;
}


.api{
display:flex;
justify-content: space-evenly;
padding-top: 100px;
padding-bottom: 70px;
}

.apipara{
padding-top: 100px;
}
</style>