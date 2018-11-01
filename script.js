var dispName = document.getElementById("name");
var dispAddress = document.getElementById("address");
var dispDob = document.getElementById("dob");
var dispGreet = document.getElementById("greeting");

var submitButton = document.getElementById("submit");

submitButton.onclick = function() {
    var fnameInput = document.getElementById("fnameInput").value;
    var lnameInput = document.getElementById("lnameInput").value;
    var addressInput = document.getElementById("addressInput").value;
    var dobInput = document.getElementById("dobInput").value;

    dispName.innerHTML = "<p>" + fnameInput + " " + lnameInput + "</p>";
    dispAddress.innerHTML = "<p>" + addressInput + "</p>";
    dispDob.innerHTML = "<p>" + dobInput + "</p>";
    dispGreet.innerHTML = "<p>" + "My name is " + fnameInput + " " + lnameInput + " and I live at " + addressInput + ". " + "I was born on " + dobInput + "." +  "</p>";
}

// var Person = function(fname, lname, address, dob) {
//     this.fname = fname;
//     this.lname = lname;
//     this.address = address;
//     this.dob = dob;
//     this.greeting = "My name is " + this.fname + " " + this.lname + " and I live at " + this.address + ". " + "I was born " + this.dob + ".";
// }

