document.getElementById("resetBtn").addEventListener("click", function () {
  printError("firstNameError", "");
  printError("lastNameError", "");
  printError("emailError", "");
  printError("mobileError", "");
  printError("countryError", "");
  printError("genderError", "");
  printError("professionError", "");
  printError("dobError", "");

  var inputs = document.forms["surveyForm"].getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    var elem = inputs[i];
    elem.classList.remove("input-1");
    elem.classList.remove("input-2");
    elem.classList.remove("input-3");
    elem.classList.remove("input-4");
  }
  var genderRadioButtons = document.getElementById("gender");
 genderRadioButtons.classList.remove("input-3");
 genderRadioButtons.classList.remove("input-4");
  var countrySelect = document.getElementById("country");
  countrySelect.classList.remove("input-3");
  countrySelect.classList.remove("input-4");

  document.forms["surveyForm"].reset();
});


