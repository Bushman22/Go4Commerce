function myFunction1() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function myFunction2() {
    document.getElementById("myDropdownbutton").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  function toggleClass(){

    let menu = document.querySelector(".nav-menu");
    menu.classList.toggle("toggleCls");
    
}
  



