let menu = document.querySelector('#menu-bars');
let navbarCustom = document.querySelector('.navbar-custom');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbarCustom.classList.toggle('active');
}

// history.pushState({}, '', './index.html'); 


// const path1 = document.getElementById("3D");
// const path2 = document.getElementById("3D_2");

// const totalPathLength1 = path1.getTotalLength();
// const totalPathLength2 = path2.getTotalLength();

// path1.style.strokeDasharray = totalPathLength1 + " " + totalPathLength1;
// path2.style.strokeDasharray = totalPathLength2 + " " + totalPathLength2;

// path1.style.strokeDashoffset = totalPathLength1;
// path2.style.strokeDashoffset = totalPathLength2;

// const animatePath = (path, duration) => {
//   let start = null;

//   const animationStep = (timestamp) => {
//     if (!start) start = timestamp;
//     const progress = timestamp - start;

//     const easeInQuad = (t) => t * t;
//     const easedProgress = easeInQuad(Math.min(progress / duration, 1));

//     path.style.strokeDashoffset = totalPathLength1 * (1 - easedProgress);

//     if (easedProgress < 1) {
//       window.requestAnimationFrame(animationStep);
//     }
//   };

//   window.requestAnimationFrame(animationStep);
// };

// animatePath(path1, 2000); // Animate path1 in 2 seconds
// animatePath(path2, 1500); // Animate path2 in 1.5 seconds (adjust timings as needed)

// --------------------------------------Gallery Page ---------------------------------------
// $(document).ready(function(){

//   $(".filter-button").click(function(){
//       var value = $(this).attr('data-filter');
      
//       if(value == "all")
//       {
//           //$('.filter').removeClass('hidden');
//           $('.filter').show('1000');
//       }
//       else
//       {
// //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
// //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
//           $(".filter").not('.'+value).hide('3000');
//           $('.filter').filter('.'+value).show('3000');
          
//       }
//   });
  
//   if ($(".filter-button").removeClass("active")) {
// $(this).removeClass("active");
// }
// $(this).addClass("active");

// });

$(document).ready(function() {

  $(".filter-button").click(function() {
    var value = $(this).attr('data-filter');

    if (value === "all") {
      $('.filter').show(500); // Show all filters with animation (optional)
    } else {
      $(".filter").hide(500); // Hide all filters with animation (optional)
      $('.filter').filter('.' + value).show(500); // Show filters with matching class
    }

    // Toggle active class on clicked button
    $(".filter-button").removeClass("active-gallery");
    $(this).addClass("active-gallery");
  });

});

