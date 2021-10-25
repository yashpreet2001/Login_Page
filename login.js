
function validate() {
    var username = document.getElementById("name").value;
    var password = document.getElementById("psw").value;

    if (username == "Yashpreet" && password == "helloyash") {
        alert("login successful!");
        window.open("https://www.w3schools.com/");
    }
    else {
        alert("login failed!")
    }
}

