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
