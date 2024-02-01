let currentSlide = 0;
const slides = document.querySelectorAll("#cardslide");

function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    if (i === currentSlide) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

setInterval(nextSlide, 3000);

showSlide(currentSlide); // Initial display of the first slide

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var option = document.getElementById("select").value;

var data = "name" + uname + "email" + email + "option" + select;

function validateForm(event) {
  event.preventDefault();

  // Reset error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("selectError").textContent = "";

  // Get form values
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var option = document.getElementById("select").value.trim();
  // Validate Name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    return;
  }

  // Validate Email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email address";
    return;
  }

  // Validate Message
  if (option === "Select Package") {
    document.getElementById("selectError").textContent = "Message is required";
    return;
  }
  swal({
    title: "Are you sure?",
    text: "You Will Send this Message!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("SUCCESFUL", {
        icon: "success",
      });
    } else {
      swal("Your Message Didn't Send");
    }
  });
}

function emailSend() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "harwinapta10@gmail.com",
    Password: "7B70CDACF6644C3B518E74254B47B3CAA84C",
    To: "harwinapta31@gmail.com",
    From: "harwinapta10@gmail.com",
    Subject: "This is the subject",
    Body: data,
  });
}
