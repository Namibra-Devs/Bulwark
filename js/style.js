const toggleBtn = document.querySelector(".toggle .fa-bars"),
      navList = document.querySelector(".navbar-list");

toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    //  navList.classList.toggle("navbar-list-show"); 
    //  toggleBtn.classList.replace('fa-bars', 'fa-times');

     if(toggleBtn.classList.contains('fa-bars')) {
        toggleBtn.classList.replace('fa-bars', 'fa-times');
        navList.classList.add("navbar-list-show");
    } else {
        toggleBtn.classList.replace('fa-times', 'fa-bars');
        navList.classList.remove("navbar-list-show");
    }
})

// $(document).ready(function(){
   
//     $('.owl-carousel').owlCarousel({
//         loop:true,
//         autoplay:true,
//         margin:200,
//         nav:false,
//         dots:false,
//         smartSpeed:800,
//         responsive:{
//             0:{
//                 items:1,
//             },
//             600:{
//                 items:2,
//             },
//             1000:{
//                 items:3,
//             }
//         }
//     })
// })

