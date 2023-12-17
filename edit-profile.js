document.addEventListener("DOMContentLoaded", function () {
  // Set initial values when the page loads
  document.getElementById("nickname").value = document.getElementById("nickName").innerHTML;
  document.getElementById("name").value = document.getElementById("fullName").innerHTML;
  document.getElementById("address").value = document.getElementById("addRess").innerHTML;
  document.getElementById("email").value = document.getElementById("eMail").innerHTML;
  document.getElementById("number-1").value = document.getElementById("Phone1").innerHTML;
  document.getElementById("number-2").value = document.getElementById("Phone2").innerHTML;
  document.getElementById("facebook").value = document.getElementById("faceBook").innerHTML;
  document.getElementById("github").value = document.getElementById("gitHub").innerHTML;
  document.getElementById("twitter").value = document.getElementById("twiTter").innerHTML;
  document.getElementById("insta").value = document.getElementById("insTa").innerHTML;

  // Set initial image in the modal
  document.getElementById("modalImage").src = document.getElementById("iMage").src;
});

function saveChanges() {
  // Retrieve the existing content
  let currentNickname = document.getElementById("nickName").innerHTML;
  let currentName = document.getElementById("fullName").innerHTML;
  let currentAddress = document.getElementById("addRess").innerHTML;
  let currentEmail = document.getElementById("eMail").innerHTML;
  let currentNumber1 = document.getElementById("Phone1").innerHTML;
  let currentNumber2 = document.getElementById("Phone2").innerHTML;
  let currentFacebook = document.getElementById("faceBook").innerHTML;
  let currentGithub = document.getElementById("gitHub").innerHTML;
  let currentTwitter = document.getElementById("twiTter").innerHTML;
  let currentInsta = document.getElementById("insTa").innerHTML;

  // Retrieve the edited values
  let imageInput = document.getElementById("image");
  let currentImage = document.getElementById("iMage").src;  // Default to the current image
  let image = currentImage;

  if (imageInput && imageInput.files.length > 0) {
      // Use the selected file if available
      image = URL.createObjectURL(imageInput.files[0]);
  }

  let nickname = document.getElementById("nickname").value;
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let email = document.getElementById("email").value;
  let number1 = document.getElementById("number-1").value;
  let number2 = document.getElementById("number-2").value;
  let facebook = document.getElementById("facebook").value;
  let github = document.getElementById("github").value;
  let twitter = document.getElementById("twitter").value;
  let insta = document.getElementById("insta").value;

  // Form validation for phone number (Philippines)
  let phoneNumberRegex = /^(09|\+639)\d{9}$/; // Valid formats: 09XXXXXXXXX or +639XXXXXXXXX
  if (!phoneNumberRegex.test(number1)) {
      alert("Please enter a valid Philippine phone number for Phone 1.");
      return;
  }

  // Form validation for email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
  }

  // Update the content with the edited values or maintain the current content if not edited
  document.getElementById("iMage").src = image;
  document.getElementById("nickName").innerHTML = nickname ? nickname : currentNickname;
  document.getElementById("fullName").innerHTML = name ? name : currentName;
  document.getElementById("addRess").innerHTML = address ? address : currentAddress;
  document.getElementById("eMail").innerHTML = email ? email : currentEmail;
  document.getElementById("Phone1").innerHTML = number1 ? number1 : currentNumber1;
  document.getElementById("Phone2").innerHTML = number2 ? number2 : currentNumber2;
  document.getElementById("faceBook").innerHTML = facebook ? facebook : currentFacebook;
  document.getElementById("gitHub").innerHTML = github ? github : currentGithub;
  document.getElementById("twiTter").innerHTML = twitter ? twitter : currentTwitter;
  document.getElementById("insTa").innerHTML = insta ? insta : currentInsta;

  // Update the image in the modal
  document.getElementById("modalImage").src = image;
}
