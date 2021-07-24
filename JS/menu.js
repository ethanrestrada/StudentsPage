let menuToggle = document.querySelector(".header__menu-toggle");
let menuToggleIcon = document.querySelector(".header__menu-toggle i");
let menu = document.querySelector(".header__navbar");

  menuToggle.addEventListener("click", e=> {
    menu.classList.toggle("active");

    if(menu.classList.contains("active")){
      menuToggleIcon.setAttribute("class", "fa fa-times");  
    } else{
      menuToggleIcon.setAttribute("class","fa fa-bars");
    }

  });
