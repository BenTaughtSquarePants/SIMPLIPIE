document.addEventListener("DOMContentLoaded", function () {
    // Set initial values when the page loads
    document.getElementById("ID").value = document.getElementById("id").innerHTML;
    document.getElementById("NAME").value = document.getElementById("naMe").innerHTML;
    document.getElementById("EMAIL").value = document.getElementById("emAil").innerHTML;
    document.getElementById("PASS").value = document.getElementById("pAss").innerHTML;
    document.getElementById("PATH").value = document.getElementById("pAth").innerHTML;
    document.getElementById("TP").value = document.getElementById("tp").innerHTML;
    document.getElementById("TS").value = document.getElementById("ts").innerHTML;  
  });
  
  function saveInfo() {
    // Retrieve the existing content
    let currentId = document.getElementById("id").innerHTML;
    let currentName = document.getElementById("naMe").innerHTML;
    let currentEmail = document.getElementById("emAil").innerHTML;
    let currentPass = document.getElementById("pAss").innerHTML;
    let currentPath = document.getElementById("pAth").innerHTML;
    let currentTp = document.getElementById("tp").innerHTML;
    let currentTs= document.getElementById("ts").innerHTML;  
  
  
    let id = document.getElementById("ID").value;
    let name = document.getElementById("NAME").value;
    let email = document.getElementById("EMAIL").value;
    let pass = document.getElementById("PASS").value;
    let path = document.getElementById("PATH").value;
    let tp= document.getElementById("TP").value;
    let ts = document.getElementById("TS").value;
  
    // Form validation for email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
  
    // Update the content with the edited values or maintain the current content if not edited
  
    document.getElementById("id").innerHTML = id ? id : currentId;
    document.getElementById("naMe").innerHTML = name ? name : currentName;
    document.getElementById("emAil").innerHTML = email ? email : currentEmail;
    document.getElementById("pAss").innerHTML = pass ? pass : currentPass;
    document.getElementById("pAth").innerHTML = path ? path : currentPath;
    document.getElementById("tp").innerHTML = tp ? tp: currentTp;
    document.getElementById("ts").innerHTML = ts ? ts : currentTs;
  
  }
  