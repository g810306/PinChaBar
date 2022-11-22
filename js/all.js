// --------------------back to top start------------------------------//

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// --------------------back to top end------------------------------//

// --------------------reservation alert and confirm start------------------------------//

$(document).ready(function () {
  $(".send").click(function (e) {
    if ($(".name").val() == "") {
      alert("訂位人姓名不可留空");
      eval("document.form1['name'].focus()");
      event.preventDefault();
    } else if ($(".phone").val() == "") {
      alert("訂位人手機號碼不可留空");
      eval("document.form1['phone'].focus()");
      event.preventDefault();
    } else if ($(".date").val() == "") {
      alert("請選擇品茶日期");
      eval("document.form1['date'].focus()");
      event.preventDefault();
    } else if ($(".partysize").val() === "請選擇品茶人數") {
      alert("請選擇品茶人數");
      eval("document.form1['partysize'].focus()");
      event.preventDefault();
    } else if ($(".store").val() == "請選擇分店") {
      alert("請選擇分店");
      eval("document.form1['store'].focus()");
      event.preventDefault();
    } else {
      event.preventDefault();
      swal("訂位已完成", "我們將發送訂位確認簡訊通知到您的手機", "success");
    }
  });
});

// --------------------reservation alert and confirm end------------------------------//

// --------------------tea_modal start------------------------------//

let modals = document.getElementsByClassName("modal");
let modalOpenBtn = document.getElementsByClassName("modalOpenBtn");
// let currentModal = null;
let currentModal;

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
window.onclick = function (event) {
  if (
    event.target == currentModal ||
    event.target.getAttribute("class") == "modalClose"
  ) {
    currentModal.style.display = "none";
  }
};

// --------------------tea_modal end------------------------------//

//--------------------mobile_menu start------------------------------//

//點擊漢堡顯示menu
(function () {
  $(".hamburger-menu").on("click", function () {
    $(".bar").toggleClass("animate");
    $(".mobile-menu").toggleClass("active");
    $(".overlay").toggleClass("active");
    return false;
  });

  // menu外的區域點擊關閉
  $(".overlay").on("click", function () {
    $(".mobile-menu").removeClass("active");
    $(".bar").removeClass("animate");
    $(".overlay").removeClass("active");
  });

  // 點擊menu區域 ，不會關掉
  $(".nav_wrapper").on("click", function (e) {
    e.stopPropagation();
  });

  //次選單點擊展開
  if ($(window).width() < 500) {
    $(".has-children").on("click", function (e) {
      $("ol").removeClass("children").addClass("children_mobile");
      $(".children_mobile").slideToggle("slow", "swing");
      $(".icon-arrow").toggleClass("open");
    });
  }
})();

//--------------------mobile_menu end------------------------------//

//--------------------space_tab start------------------------------//

/*tab 收合*/

// Show the first tab and hide the rest
$("#tabs-nav li:first-child").addClass("active");
$(".tab-content").hide();
$(".tab-content:first").show();

// Click function
$("#tabs-nav li").click(function () {
  $("#tabs-nav li").removeClass("active");
  $(this).addClass("active");
  $("#tabs-nav li h2").css("color", "#573e12");
  $(".active h2").css("color", "#c4a87e");
  //console.log(this);
  $(".tab-content").hide();

  var activeTab = $(this).find("a").attr("href");
  $(activeTab).fadeIn();
  //console.log(activeTab);
  return false;
});

//--------------------space_tab end------------------------------//

//--------------------index_slider------------------------------//

let imgs = [
  "../img/pic3.jpg",
  "../img/pic2.jpg",
  "../img/pic1.jpg",
  "../img/pic4.jpg",
  "../img/pic5.jpg",
  "../img/pic6.jpg",
];
let slider = document.getElementById("slider");
let i = 0;
setInterval(function () {
  slider.style.backgroundImage = `url('imgs/${imgs[i]}'`;
  i++;
  if (i == imgs.length) {
    i = 0;
  }
}, 3000);

// sayHi();

// // expression
// const sayHi = function(){
//   console.log('hi');
// }

// // direction
// function sayHi2 (){
//   console.log('hi');
// }
