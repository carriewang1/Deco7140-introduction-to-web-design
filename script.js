


/* music player and pause*/

var myMusic = document.getElementById("music");
function play() {
  myMusic.play();
}

function pause() {
  myMusic.pause();
}

/*-show each section on menu  -*/
let slideIndex = 1;
showSlides(slideIndex);  // set default slide index to 1

function plusSlides(n) {
  showSlides(slideIndex += n);  // each time click on slide that index incremented by n times
}

function currentSlide(n) {
  showSlides(slideIndex = n);  
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); // show top
  let dots = document.getElementsByClassName("demo"); // show bottom along with top imgae move

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) { // when end of slide show nothing 
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");  // bottom shows same photo as top umtil end then back again 
  }
  slides[slideIndex - 1].style.display = "block";   
  dots[slideIndex - 1].className += " active";

}

/* menu */
function openMenu(evt, menuName) {
  let i, x, tablinks;
  x = document.getElementsByClassName("menu"); // click each taplink to show each taplink's content
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" menu_hot", ""); // bottom shows same conents as top umtil end then back again 
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " menu_hot";
}
document.getElementById("myLink").click(); // click link to  open menu



/** explore image when click button  in class*/
var modal = document.getElementById("myModal");

// Get the button that opens the class
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/**name filed checked */

function checkPassword(str) {
  let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/; // set default password length  to 6 characters with default characters a-z lower case and upper case
  return re.test(str); // returns true if password length is at least 6 characters with default characters a-z lower case and upper case characters and    returns false otherwise
}

function checkForm(form) {
  if (form.username.value == "") {        // if username is empty
    alert("Error: Username cannot be blank!");// check if blank entered username
    form.username.focus();
    return false;
  }
  re = /^\w+$/;
  if (!re.test(form.username.value)) {
    alert("Error: Username must contain only letters, numbers and underscores!");// if username not fill 
    form.username.focus();
    return false;
  }
  if (form.pwd1.value.length < 7) {
    alert("please enter at least 7 characters! With at least 1 upper case letter and 1 lower cannot letter."); // check password length
  }


  if (form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
    if (!checkPassword(form.pwd1.value)) {
      alert("The password you have entered is not valid!With at least 1 upper case letter and 1 lower cannot letter."); // if first password not valid and not fill
      form.pwd1.focus();
      return false;
    }
  } else {
    alert("Error: Please check that you've entered and confirmed your password!"); //// check confirmation password 
    form.pwd1.focus();
    return false;
  }
  return alert("Thank you for your patient , Please login you account and booking your fav rooms and classes with us 😊 .");// after check finished 
};
function checkDetail() {
  alert("Thank you for your patient , we have receviced your order , see you soon 😊!!!"); 
};




