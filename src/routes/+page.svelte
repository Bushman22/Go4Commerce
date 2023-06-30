



<title>Go4Commerce</title>

<body>
<link rel="stylesheet" type= "text/css" href="style.css">


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
<div class ="top">
<div class ="one">
    <h1>DIGITIZE YOUR<br/> VISION</h1>
    <p>For even the most sophisticated business models,
         we<br/> provide an all-in-one, headless and multiple 
        integration<br/> template-based platform. </p>
        <a href = "/admin"><h4>Admin Login &#x2192</h4></a>
   
</div>
<img class= "img1" src ="\images\Homepage banner illustration.png" alt="banner">
</div>
<div class ="paragraph">
    In the highly competitive world of eCommerce, it is crucial that your website is optimized for success.
     We develop <br/>eCommerce websites with powerful tools that can help you reach your customers, drive sales, bookings, 
     and manage<br/> your daily operations.
</div>
<div class="box">
    <div class ="col-left">
        <div class ="col-top" >
            <img class= "ff" src ="\images\F&F image 1.jpg" alt="img1">
            <img class= "ff4" src ="\images\F&F Image 2.jpg" alt="img2">
        </div>
        <div class ="col-bottom">
            <img class= "ff1" src ="\images\F&F Image 3.jpg" alt="img3">
            <img class= "ff3" src ="\images\F&F Image 4.jpg" alt="img4">
            <img class= "ff2" src ="\images\F&F Image 5.jpg" alt="img5">
        </div>
    </div>
   

    <div class = "col-right">
        <h2>SELLING ONLINE <br/> HAS NEVER BEEN <br/> EASIER</h2>
        <p>Go4Commerce has evolved to be everything you <br/>
            need to sell anything you can imagine. Showcase<br/>
             your products at their absolute best.</p>
        <a href = "/features"><h4>Features & Functions &#x2192</h4></a>
    </div>
    </div>

    <div class ="integrations">
        <div class ="integrationspara">
                <h2>INTEGRATIONS</h2>
            <ul>
                <h3><li>Multiple Integrations</li></h3>
                <p>A powerful & secure shopping cart for your<br/>
                     platform</p>
                <a href ="/integrations"><h4>Find out more &#x2192</h4></a>
                <h3><li>Unified Shopping Cart</li></h3>
                <p>A powerful & secure shopping cart for your <br/>
                    platform</p>
                <a href ="/unified"><h4>Find out more &#x2192</h4></a>  
                <h3><li>Payment Gateway</li></h3>
                <p>Any payment gateway and all of your <br/>
                     transactions, in one place!</p>
                <a href ="/payment"><h4>Find out more &#x2192</h4></a>  
            </ul>
        </div>
        <img class= "img2" src ="\images\Homepage integrations illustration.png" alt="integrations">
    </div>

    <div class ="frontend">
        <img class= "img3" src ="\images\homepage stunning frontend illustration.png" alt="fontend">
        <div class ="frontendpara">
            <h2>STUNNING <br/> FRONTEND DESIGN</h2>
            <p>Pick one of our ready-made templates with an already<br/>
                 written code base and a design based on the product you<br/>
                  want to sell. From there, we custom design and build your<br/>
                   website according to your brand! </p>
                <a href = "/templates"><h4>Template Design &#x2192</h4></a>
            </div>
     </div>
            <div class ="hire">
                <div class ="hirepara">
                    <h2>HIRE THE <br/> GO4COMMERCE <br/> EXPERTS</h2>
                    <p> Our resellers know how to design, develop, and <br/>
                        maintain your platform, no matter where you are in<br/>
                         the world.</p>
                        <a href = "/resellers"><h4>Our Resellers &#x2192</h4></a>
                   
                </div>
                <img class= "img4" src ="\images\Homepage hire an expert illustration.jpg" alt="expert">
            </div>

<div class = "footer">
    <a href = "/"><img class="logo2" src ="\images\go4logo.png" alt="logo" style=height:40px></a>
        
</div>

<script src = "dropdown.js"></script>
</body>





<style>
    
  @import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz@0,6..12;1,6..12&family=Questrial&display=swap');


h2{
    margin-bottom: 20px;
}


h4{
    margin-bottom: 20px;
}

.one{
    padding-top: 160px;
}
.img1{
    padding-top: 30px;
    padding-left: 50px;
}
.img2{
    height:500px;
    padding-top: 55px;
}

.img4{
padding-bottom: 100px;
  }

.top{
    display: flex;
    justify-content: center;
}
.top a{
   color:#20405F;
}
p{
    margin-top: 5px;
    margin-bottom: 10px;
}
.paragraph{
    text-align:center;
    padding-top:60px;
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
padding-top:220px;
padding-bottom: 200px;
}

.col-right a{
    color:#20405F; 
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
.integrations{
    display:flex;
    justify-content: space-around;
    text-align:left;
    padding-left: 50px;

}
.integrationspara{
    padding-top: 80px;
}

.integrationspara li{
    list-style-image: url('/images/Check mark.jpg');
}

.frontend{
    display:flex;
    justify-content: center;
    padding-top: 90px;
}
.frontendpara{
    padding-top: 200px;
    padding-left: 100px;
}

.hire{
    display:flex;
    justify-content: center;
    padding-top: 100px;
}
.hirepara{
   padding-right: 100px;
   padding-top: 150px;
}

@media only screen and (max-width:768px){

.img1{
    height: 300px;
    padding-top: 0px;
    padding-left: 0px;
}

.img2{
    height:360px;
}

.img3{
    height:360px;
}

.img4{
    height:360px;
}

.top{
    padding-top: 0px;
    display: flex;
    flex-direction: column;
}

.one{
    padding-top: 10px;
     margin-left:20px ;
     padding-right: 0px;
     

}

.paragraph{
    margin: 20px; 

    
}

.col-left{
    text-align: center;
  text-align: right;
  padding-left: 0px;
  padding-right: 0px;
  margin-left: 20px;
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
padding-top:20px;
padding-bottom: 0px;
margin-left: 20px;
}

.integrations{
    flex-direction: column;
}

.frontend{
    flex-direction: column;
    margin-left:20px;
}
.frontendpara{
    padding-top: 50px;
    padding-left: 0px;
    padding-bottom: 0px;
    
}

.hire{
    flex-direction: column;
    margin-left: 20px;
    padding-top: 0px;
}
.hirepara{
   padding-right: 0px;
   padding-top: 50px;
}
}

</style>

