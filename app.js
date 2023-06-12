// // taewan style _ 트랜드함
// // 1st. html element를 가지고 옴
// const btn = document.getElementsByClassName("btn");
// // 3rd. function 생성
// function balance() {}
// // 2nd. event 발생
// btn.addEventListener("click", balance);
// //

/* 광고 슬라이드 ps. js 내부에서 적용이 되는 function. Getelement 할 필요 없음.*/
let slideIndex = 1;

showSlides(slideIndex);

// 전, 후 이미지 컨트롤
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// 전, 후 이미지 컨트롤 2
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}

filterSelection("food1");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// 필터링된 요소 표시
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

//선택되지 않은 요소 숨기기
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// 현재 단추에 활성 클래스 추가(강조 표시)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/*밸런스,~*/
filterSelection("food1");
function filterSelection(c) {
  var x, j;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  //필터링된 요소에 "show" 클래스(표시:블록)를 추가하고 선택되지 않은 요소에서 "show" 클래스를 제거
  for (j = 0; j < x.length; j++) {
    w3RemoveClass(x[j], "show");
    if (x[j].className.indexOf(c) > -1) w3AddClass(x[j], "show");
  }
}

// 필터링된 요소 표시
function w3AddClass(element, name) {
  var j, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) == -1) {
      element.className += " " + arr2[j];
    }
  }
}

//선택되지 않은 요소 숨기기
function w3RemoveClass(element, name) {
  var j, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (j = 0; j < arr2.length; j++) {
    while (arr1.indexOf(arr2[j]) > -1) {
      arr1.splice(arr1.indexOf(arr2[j]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// 현재 단추에 활성 클래스 추가(강조 표시) -> 이거 잘 몰라 공부해야됨.
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var j = 0; j < btns.length; j++)
  btns[j].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
