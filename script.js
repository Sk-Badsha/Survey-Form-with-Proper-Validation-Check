function printError(Id, Msg) {
  document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {
  //    debugger
  var firstname = document.forms["surveyForm"]["first_name"].value;
  var lastname = document.forms["surveyForm"]["last_name"].value;
  var dob = document.forms["surveyForm"]["dob"].value;
  var country = document.forms["surveyForm"]["country"].value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var profession = document.forms["surveyForm"]["profession"].value;
  var email = document.forms["surveyForm"]["email"].value;
  var mobile = document.forms["surveyForm"]["mobile"].value;

  var firstNameError =
    (lastNameError =
    dobError =
    countryError =
    genderError =
    professionError =
    emailError =
    mobileError =
      true);

  if (firstname == "") {
    printError("firstNameError", "Please enter your first name");
    var elem = document.getElementById("first_name");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(firstname) === false) {
      printError("firstNameError", "Please enter a valid name");
      var elem = document.getElementById("first_name");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("firstNameError", "");
      firstNameError = false;
      var elem = document.getElementById("first_name");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  if (lastname == "") {
    printError("lastNameError", "Please enter your last name");
    var elem = document.getElementById("last_name");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(lastname) === false) {
      printError("lastNameError", "Please enter a valid name");
      var elem = document.getElementById("last_name");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("lastNameError", "");
      lastNameError = false;
      var elem = document.getElementById("last_name");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  if (dob == "") {
    printError("dobError", "Please enter your Date of Birth");
    var elem = document.getElementById("dob");
    elem.classList.add("input-4");
    elem.classList.remove("input-3");
  } else {
    printError("dobError", "");
    dobError = false;
    var elem = document.getElementById("dob");
    elem.classList.add("input-3");
    elem.classList.remove("input-4");
  }

  if (country == "Select") {
    printError("countryError", "Please select your country");
    var elem = document.getElementById("country");
    elem.classList.add("input-4");
    elem.classList.remove("input-3");
  } else {
    printError("countryError", "");
    countryError = false;
    var elem = document.getElementById("country");
    elem.classList.add("input-3");
    elem.classList.remove("input-4");
  }

  if (gender == null) {
    printError("genderError", "Please select your gender");
    var elem = document.getElementById("gender");
    elem.classList.add("input-4");
    elem.classList.remove("input-3");
  } else {
    printError("genderError", "");
    genderError = false;
    var elem = document.getElementById("gender");
    elem.classList.add("input-3");
    elem.classList.remove("input-4");
  }

  if (profession == "") {
    printError("professionError", "Please select your profession");
    var elem = document.getElementById("profession");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    printError("professionError", "");
    professionError = false;
    var elem = document.getElementById("profession");
    elem.classList.add("input-1");
    elem.classList.remove("input-2");
  }

  if (email == "") {
    printError("emailError", "Please enter your email address");
    var elem = document.getElementById("email");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailError", "Please enter a valid email address");
      var elem = document.getElementById("email");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("emailError", "");
      emailError = false;
      var elem = document.getElementById("email");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  if (mobile == "") {
    printError("mobileError", "Please enter your mobile number");
    var elem = document.getElementById("mobile");
    elem.classList.add("input-2");
    elem.classList.remove("input-1");
  } else {
    var regex = /^[1-9]\d{9}$/;
    if (regex.test(mobile) === false) {
      printError("mobileError", "Please enter a valid 10 digit mobile number");
      var elem = document.getElementById("mobile");
      elem.classList.add("input-2");
      elem.classList.remove("input-1");
    } else {
      printError("mobileError", "");
      mobileError = false;
      var elem = document.getElementById("mobile");
      elem.classList.add("input-1");
      elem.classList.remove("input-2");
    }
  }

  if (
    (firstNameError ||
      lastNameError ||
      dobError ||
      countryError ||
      genderError ||
      professionError ||
      emailError ||
      mobileError) == true
  ) {
    return false;
  } else {
    return true;
  }
}

function displayPopup() {
  const popup = document.getElementById("popup");
  const popupDetails = document.getElementById("popup-details");

  // Get form data
  const firstName = document.getElementById("first_name").value;
  const lastName = document.getElementById("last_name").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  // Display form data in the popup
  popupDetails.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

  popup.style.display = "block";
  return new Promise((resolve) => {
    document
      .getElementById("close-popup")
      .addEventListener("click", function () {
        const popup = document.getElementById("popup");
        popup.style.display = "none";
        resolve();
      });
  });
}

async function submitForm() {
  const isFormValid = validateForm();
  if (!isFormValid) {
    return false;
  }

  await displayPopup();
  return true;
}

document.forms["surveyForm"].addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission
  submitForm().then((shouldSubmit) => {
    if (shouldSubmit) {
      document.forms["surveyForm"].submit();
    }
  });
});
