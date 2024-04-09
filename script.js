var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function calculateAge() {
  var dob = parseInt(document.getElementById('dob').value);
  var mob = parseInt(document.getElementById('mob').value);
  var yob = parseInt(document.getElementById('yob').value);

  var today = new Date();
  var birthDate = new Date(yob, mob - 1, dob); // Subtract 1 from month because month in Date object is 0-indexed

  var ageInMilliseconds = today - birthDate;
  var ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)); // 365.25 days per year to account for leap years
  var remainingDays = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));

  document.getElementById('result').innerHTML = "You are " + ageInYears + " years and " + remainingDays + " days old.";

  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}