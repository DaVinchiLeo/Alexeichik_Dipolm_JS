//стены
//обои
let q = document.getElementById("q");
q.onclick = function (event) {
  let q1 = document.getElementById("q1");
  let q2 = document.getElementById("q2");
  let q3 = document.getElementById("q3");
  let q4 = document.getElementById("q4");
  let q5 = document.getElementById("q5");

  let q_result = document.getElementById("q_result");
  let p = Number(q1.value * 2 + q2.value * 2);
  let s = Number(p) * Number(q3.value);
  let lines_in_rulon = Math.round(Number(q5.value / q3.value));
  let culc_rulon = Math.round(Number(p / q4.value / lines_in_rulon));

  q_result.innerText = `${s} метров квадратных`;
  console.log(
    `площадь стен${s}
   метров квадратных ${p}
   Кол рулонов  ${culc_rulon}`
  );
  let q_print = document.getElementById("q_print");
  q_print.style.display = "block";
  event.stopPropagation();
};
//выравнивание поверх. стен
let w = document.getElementById("w");
w.onclick = function (event) {
  let w1 = document.getElementById("w1");
  let w2 = document.getElementById("w2");
  let w3 = document.getElementById("w3");
  let w4 = document.getElementById("w4");
  let w5 = document.getElementById("w5");
  let w_result = document.getElementById("w_result");
  let s2 = Number(w1.value) * Number(w2.value);
  let kol_shpat = Number(s2) * Number(w3.value);
  let kol_shtukatur = Number(s2) * Number(w4.value);
  let kol_grunt = Number(s2) * Number(w5.value);
  w_result.innerText = `${s2} стена метров квадратных`;
  console.log(
    `площадь стены=${s2}метров квадратных;
   при норме расхода ${w3.value}потребеется ${kol_shpat}шпатлевеки;
   при норме расхода ${w4.value}потребеется ${kol_shtukatur} штукатурки;
   при норме расхода ${w5.value}потребеется ${kol_grunt} грунтовки;`
  );
  let w_print = document.getElementById("w_print");
  w_print.style.display = "block";
  event.stopPropagation();
};
//--------Фундамент------------------------------------------------
let e = document.getElementById("e");
e.onclick = function (event) {
  let e1 = document.getElementById("e1");
  let e2 = document.getElementById("e2");
  let e3 = document.getElementById("e3");

  let e_result = document.getElementById("e_result");
  let p_e = Number(Number(e1.value) + Number(e2.value)) * 2;
  let s_e = Number(e1.value) * Number(e2.value);
  let s_bok_pover = Number(p_e) * Number(e3.value);

  e_result.innerText = `${p_e} периметр м
   площадь плиты=${s_e}метров квадратных;
   площадь борта плиты ${s_bok_pover} метров квадратных;`;
  let e_print = document.getElementById("e_print");
  e_print.style.display = "block";
  event.stopPropagation();
};
//Top tab menu
function tabMenutop(evttop, Nametop) {
  let i, tabcontenttop, tablinkstop;
  tabcontenttop = document.getElementsByClassName("tabcontenttop");
  for (i = 0; i < tabcontenttop.length; i++) {
    tabcontenttop[i].style.display = "none";
  }
  tablinkstop = document.getElementsByClassName("tablinkstop");
  for (i = 0; i < tablinkstop.length; i++) {
    tablinkstop[i].className = tablinkstop[i].className.replace(" active", "");
  }
  document.getElementById(Nametop).style.display = "block";
  evttop.currentTarget.className += " active";
}
document.getElementById("defaultOpenTop").click();
//вложенное tab menu
function tabMenu(evt, Name) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Name).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function tabMenu2(evt2, Name2) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Name2).style.display = "block";
  evt2.currentTarget.className += " active";
}
document.getElementById("defaultOpenFund").click();
//--------------print--------------------

q_print.onclick = function (event) {
  window.print(q_result);
  event.stopPropagation();
};
w_print.onclick = function (event) {
  window.print();
  event.stopPropagation();
};

//--------------------------------------------------------------------------------------
const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const my_canvas = canvas.getContext("2d");

class Img {
  constructor(img, x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.dx = dx;
    this.dy = dy;
  }
  drawIma() {
    my_canvas.drawImage(this.img, this.x, this.y, 150, 125);
    this.moveing();
  }
  moveing() {
    if (this.x > window.innerWidth || this.x < 0) {
      this.dx = -this.dx;
    }
    if (this.y > window.innerHeight || this.y < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}

const imgArray = [];
for (let i = 0; i < 20; i++) {
  //массив img
  //var names = ["11.png", "22.png", "33.png"];
  //var arrayImage = [];
  //for (var j = 0, J = names.length; j < J; j++) {
  //arrayImage[j] = new Image();
  //arrayImage[j].src = names[j];
  //}
  let img1 = new Image();
  img1.src = "./img/22.png";

  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let dx = Math.random() * 6;
  let dy = Math.random() * 6;
  imgArray.push(new Img(img1, x, y, dx, dy));
}
console.log(imgArray);
function animate() {
  requestAnimationFrame(animate);
  my_canvas.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (let i = 0; i < imgArray.length; i++) {
    imgArray[i].drawIma();
  }
}
animate();
document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById("page-preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
    }
  }, 3000);
};
//canvas------------------------------
let canvas2, context, canvaso, contexto;
canvaso = document.getElementById("imageView");
context = canvaso.getContext("2d");
context.lineWidth = 5;

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(39, 278);
context.lineTo(368, 22);
context.stroke();
context.closePath();

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(367, 22);

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(368, 21);
context.lineTo(549, 141);
context.stroke();
context.closePath();

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(39, 275);
context.lineTo(205, 417);
context.stroke();
context.closePath();

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(549, 141);
context.lineTo(204, 416);
context.stroke();
context.closePath();

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(40, 274);
context.lineTo(41, 335);
context.stroke();
context.closePath();

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(205, 416);
context.lineTo(205, 465);
context.stroke();
context.closePath();

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(40, 331);
context.lineTo(204, 470);
context.stroke();
context.closePath();

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(548, 141);
context.lineTo(548, 199);
context.stroke();
context.closePath();

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(548, 196);
context.lineTo(204, 466);
context.stroke();
context.closePath();

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(76, 278);
context.lineTo(368, 50);
context.stroke();
context.closePath();

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(202, 390);
context.lineTo(514, 141);
context.stroke();
context.closePath();

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(79, 277);
context.lineTo(203, 387);
context.stroke();
context.closePath();

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(365, 47);
context.lineTo(512, 142);
context.stroke();
context.closePath();

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(367, 53);
context.lineTo(368, 94);
context.stroke();
context.closePath();

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(366, 92);
context.lineTo(104, 297);
context.stroke();
context.closePath();

context.strokeStyle = "#000000";
context.beginPath();
context.moveTo(369, 92);
context.lineTo(481, 165);
context.stroke();
context.closePath();
