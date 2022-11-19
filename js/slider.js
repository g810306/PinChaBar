// --------------------tea_modal------------------------------//

let modals = document.getElementsByClassName("modal");
let modalOpenBtn = document.getElementsByClassName("modalOpenBtn");
let currentModal = null;

// Function to open modal by id
function openModal(id) {
  for (j = 0; j < modals.length; j++) {
    if (modals[j].getAttribute("id") == id) {
      currentModal = modals[j];
      currentModal.style.display = "block";
      break;
    }
  }
}

// When the user clicks the button, open modal with the same id
modalOpenBtn.onclick = function () {
  let currentID = modalOpenBtn.getAttribute("id");
  openModal(currentID);
};

// When the user clicks anywhere outside of the modal or the X, close
window.ontouchstart = function (event) {
  if (
    event.target == currentModal ||
    event.target.getAttribute("class") == "modalClose"
  ) {
    currentModal.style.display = "none";
  }
};



//--------------------mobile_menu------------------------------//

(function () {
  $(".hamburger-menu").on("click", function () {
    $(".bar").toggleClass("animate");
    $(".mobile-menu").toggleClass("active");
    $(".overlay").toggleClass("active");
    return false;
  });

// menu外的區域
$(".overlay").on("click", function(){
  $(".mobile-menu").removeClass("active");
  $(".bar").removeClass("animate");
  $(".overlay").removeClass("active");


});

// 點擊.nav_wrapper區域 ，不會關掉
$(".nav_wrapper").on("click", function(e){
  e.stopPropagation();
});



  $(".has-children").on("click", function () {
    $("ol").removeClass("children").addClass("children_mobile");
    
    $(".children_mobile").slideToggle("slow", "swing");
    $(".icon-arrow").toggleClass("open");




    
  });
})();


/*tab 收合*/

// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('#tabs-nav li h2').css('color', '#573e12');
  $('.active h2').css('color', '#c4a87e');
  //console.log(this);
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  //console.log(activeTab);
  return false;
});


//--------------------index_slider------------------------------//

let imgs = [
  "../img/pic1.png",
  "../img/pic2.png",
  "../img/pic3.png",
  "../img/pic4.png",
  "../img/pic5.png",
];
let slider = document.getElementById("slider");
let i = 0;
setInterval(function () {
  slider.style.backgroundImage = `url('imgs/${imgs[i]}'`;
  i++;
  if (i == imgs.length) {
    i = 0;
  }
}, 2000);


